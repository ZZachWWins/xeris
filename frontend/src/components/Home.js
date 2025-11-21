// Updated Home.js - Removed Controls and Speed Indicator
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaFileAlt, FaHandshake, FaCode } from 'react-icons/fa';
import * as THREE from 'three'; // npm install three

function Home() {
  const containerRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const scannerCanvasRef = useRef(null);
  const cardStreamRef = useRef(null);
  const cardLineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particleCanvas = particleCanvasRef.current;
    const scannerCanvas = scannerCanvasRef.current;
    const cardStream = cardStreamRef.current;
    const cardLine = cardLineRef.current;

    if (!container || !particleCanvas || !scannerCanvas || !cardStream || !cardLine) return;

    window.cardStream = null;
    window.particleSystem = null;
    window.particleScanner = null;
    window.setScannerScanning = null;
    window.getScannerStats = null;

    class CardStreamController {
      constructor() {
        this.container = cardStream;
        this.cardLine = cardLine;
        this.position = 0;
        this.velocity = 120;
        this.direction = -1;
        this.isAnimating = true;
        this.isDragging = false;
        this.lastTime = 0;
        this.lastMouseX = 0;
        this.mouseVelocity = 0;
        this.friction = 0.95;
        this.minVelocity = 30;
        this.containerWidth = 0;
        this.cardLineWidth = 0;
        this.init();
      }
      init() {
        this.populateCardLine();
        this.calculateDimensions();
        this.setupEventListeners();
        this.updateCardPosition();
        this.animate();
        this.startPeriodicUpdates();
      }
      calculateDimensions() {
        this.containerWidth = container.offsetWidth;
        const cardWidth = 400;
        const cardGap = 60;
        const cardCount = this.cardLine.children.length;
        this.cardLineWidth = (cardWidth + cardGap) * cardCount - cardGap;
      }
      setupEventListeners() {
        this.cardLine.addEventListener("mousedown", (e) => this.startDrag(e));
        document.addEventListener("mousemove", (e) => this.onDrag(e));
        document.addEventListener("mouseup", () => this.endDrag());
        this.cardLine.addEventListener("touchstart", (e) => this.startDrag(e.touches[0]), { passive: false });
        document.addEventListener("touchmove", (e) => this.onDrag(e.touches[0]), { passive: false });
        document.addEventListener("touchend", () => this.endDrag());
        this.cardLine.addEventListener("wheel", (e) => this.onWheel(e));
        this.cardLine.addEventListener("selectstart", (e) => e.preventDefault());
        this.cardLine.addEventListener("dragstart", (e) => e.preventDefault());
        window.addEventListener("resize", () => this.calculateDimensions());
      }
      startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        this.isAnimating = false;
        this.lastMouseX = e.clientX;
        this.mouseVelocity = 0;
        const transform = window.getComputedStyle(this.cardLine).transform;
        if (transform !== "none") {
          const matrix = new DOMMatrix(transform);
          this.position = matrix.m41;
        }
        this.cardLine.style.animation = "none";
        this.cardLine.classList.add("dragging");
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
      }
      onDrag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        const deltaX = e.clientX - this.lastMouseX;
        this.position += deltaX;
        this.mouseVelocity = deltaX * 60;
        this.lastMouseX = e.clientX;
        this.cardLine.style.transform = `translateX(${this.position}px)`;
        this.updateCardClipping();
      }
      endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.cardLine.classList.remove("dragging");
        if (Math.abs(this.mouseVelocity) > this.minVelocity) {
          this.velocity = Math.abs(this.mouseVelocity);
          this.direction = this.mouseVelocity > 0 ? 1 : -1;
        } else {
          this.velocity = 120;
        }
        this.isAnimating = true;
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
      }
      animate() {
        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        if (this.isAnimating && !this.isDragging) {
          if (this.velocity > this.minVelocity) {
            this.velocity *= this.friction;
          } else {
            this.velocity = Math.max(this.minVelocity, this.velocity);
          }
          this.position += this.velocity * this.direction * deltaTime;
          this.updateCardPosition();
        }
        requestAnimationFrame(() => this.animate());
      }
      updateCardPosition() {
        const containerWidth = this.containerWidth;
        const cardLineWidth = this.cardLineWidth;
        if (this.position < -cardLineWidth) {
          this.position = containerWidth;
        } else if (this.position > containerWidth) {
          this.position = -cardLineWidth;
        }
        this.cardLine.style.transform = `translateX(${this.position}px)`;
        this.updateCardClipping();
      }
      onWheel(e) {
        e.preventDefault();
        const scrollSpeed = 20;
        const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
        this.position += delta;
        this.updateCardPosition();
        this.updateCardClipping();
      }
      generateCode(width, height) {
        const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const pick = (arr) => arr[randInt(0, arr.length - 1)];
        const header = [
          "// XerisCoin Transformation Engine • Secure Payment Scanner",
          "/* Patent-Pending Triple Consensus: PoW + PoH + PoS */",
          "const XERIS_TPS = 10000;",
          "const BLOCKCHAIN_INTEGRITY = '100% UPTIME';",
          "const TOKENIZED_ASSETS = 'RWA Liquidity Unlock';",
          "const TRANSITION = 0.05;",
        ];
        const helpers = [
          "function secureHash(block) { return sha256(block.data + XERIS_TPS); }",
          "function consensusValidate(tx) { return PoW(tx) && PoH(tx) && PoS(tx); }",
          "const now = () => performance.now();",
          "function rng(min, max) { return Math.random() * (max - min) + min; }",
        ];
        const particleBlock = (idx) => [
          `class XerisParticle${idx} {`,
          " constructor(x, y, vx, vy, r, a) {",
          " this.x = x; this.y = y;",
          " this.vx = vx; this.vy = vy;",
          " this.r = r; this.a = a;",
          " }",
          " step(dt) { this.x += this.vx * dt; this.y += this.vy * dt; }",
          "}",
        ];
        const scannerBlock = [
          "const xerisScanner = {",
          " x: Math.floor(window.innerWidth / 2),",
          " width: 8,",
          " glow: 3.5,",
          "};",
          "",
          "function drawSecureParticle(ctx, p) {",
          " ctx.globalAlpha = clamp(p.a, 0, 1);",
          " ctx.drawImage(gradient, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);",
          "}",
        ];
        const loopBlock = [
          "function transformPayments(t) {",
          " // requestAnimationFrame(transformPayments);",
          " const dt = 0.016;",
          " // Scan & Tokenize Assets",
          "}",
        ];
        const misc = [
          "const state = { intensity: 1.2, particles: 2500, xerisTPS: 10000 };",
          "const bounds = { w: window.innerWidth, h: 300 };",
          "const gradient = document.createElement('canvas');",
          "const ctx = gradient.getContext('2d');",
          "ctx.globalCompositeOperation = 'lighter';",
          "// Triple Consensus Overlay: Secure Transformation",
        ];
        const library = [];
        header.forEach((l) => library.push(l));
        helpers.forEach((l) => library.push(l));
        for (let b = 0; b < 3; b++) particleBlock(b).forEach((l) => library.push(l));
        scannerBlock.forEach((l) => library.push(l));
        loopBlock.forEach((l) => library.push(l));
        misc.forEach((l) => library.push(l));
        for (let i = 0; i < 40; i++) {
          const n1 = randInt(1, 9);
          const n2 = randInt(10, 99);
          library.push(`const v${i} = (${n1} + ${n2}) * 0.${randInt(1, 9)};`);
        }
        for (let i = 0; i < 20; i++) {
          library.push(`if (state.intensity > ${1 + (i % 3)}) { xerisScanner.glow += 0.01; }`);
        }
        let flow = library.join(" ");
        flow = flow.replace(/\s+/g, " ").trim();
        const totalChars = width * height;
        while (flow.length < totalChars + width) {
          const extra = pick(library).replace(/\s+/g, " ").trim();
          flow += " " + extra;
        }
        let out = "";
        let offset = 0;
        for (let row = 0; row < height; row++) {
          let line = flow.slice(offset, offset + width);
          if (line.length < width) line = line + " ".repeat(width - line.length);
          out += line + (row < height - 1 ? "\n" : "");
          offset += width;
        }
        return out;
      }
      calculateCodeDimensions(cardWidth, cardHeight) {
        const fontSize = 11;
        const lineHeight = 13;
        const charWidth = 6;
        const width = Math.floor(cardWidth / charWidth);
        const height = Math.floor(cardHeight / lineHeight);
        return { width, height, fontSize, lineHeight };
      }
      createCardWrapper(index) {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper";
        wrapper.style.width = "400px";
        wrapper.style.height = "250px";
        const normalCard = document.createElement("div");
        normalCard.className = "card card-normal";
        normalCard.style.width = "400px";
        normalCard.style.height = "250px";
        const cardImages = [
          "https://res.cloudinary.com/di6yjluli/image/upload/v1763755971/689f20b5a080a31ee7154b19_1_yyzhvh.png",
          "https://res.cloudinary.com/di6yjluli/image/upload/v1763755736/Zachary_Winkle_jrdgam.png",
          "https://res.cloudinary.com/di6yjluli/image/upload/v1763755946/689f20b5c1e4919fd69672b8_3_ixuawf.png",
          "https://res.cloudinary.com/di6yjluli/image/upload/v1763755930/689f20b5bea2f1b07392d936_4_r0dw3p.png",
          "https://res.cloudinary.com/di6yjluli/image/upload/v1763755936/689f20b5f6a5e232e7beb4be_2_xqgjnh.png",
        ];
        const cardImage = document.createElement("img");
        cardImage.className = "card-image";
        cardImage.src = cardImages[index % cardImages.length];
        cardImage.alt = "Xeris Secure Payment Card";
        cardImage.style.width = "400px";
        cardImage.style.height = "250px";
        cardImage.style.objectFit = "cover";
        cardImage.onerror = () => {
          const canvas = document.createElement("canvas");
          canvas.width = 400;
          canvas.height = 250;
          const ctx = canvas.getContext("2d");
          const gradient = ctx.createLinearGradient(0, 0, 400, 250);
          gradient.addColorStop(0, "#001122");
          gradient.addColorStop(1, "#112233");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 400, 250);
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 20px Arial";
          ctx.fillText("XERIS", 150, 125);
          cardImage.src = canvas.toDataURL();
        };
        normalCard.appendChild(cardImage);
        const brandLogo = document.createElement("div");
        brandLogo.className = "card-logo";
        brandLogo.textContent = "$XERIS";
        normalCard.appendChild(brandLogo);

        const asciiCard = document.createElement("div");
        asciiCard.className = "card card-ascii";
        asciiCard.style.width = "400px";
        asciiCard.style.height = "250px";
        const asciiContent = document.createElement("div");
        asciiContent.className = "ascii-content";
        const { width, height, fontSize, lineHeight } = this.calculateCodeDimensions(400, 250);
        asciiContent.style.fontSize = `${fontSize}px`;
        asciiContent.style.lineHeight = `${lineHeight}px`;
        asciiContent.textContent = this.generateCode(width, height);
        asciiCard.appendChild(asciiContent);
        wrapper.appendChild(normalCard);
        wrapper.appendChild(asciiCard);
        return wrapper;
      }
      updateCardClipping() {
        const scannerX = container.offsetWidth / 2;
        const scannerWidth = 8;
        const scannerLeft = scannerX - scannerWidth / 2;
        const scannerRight = scannerX + scannerWidth / 2;
        let anyScanningActive = false;
        document.querySelectorAll(".card-wrapper").forEach((wrapper) => {
          const rect = wrapper.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const cardLeft = rect.left - containerRect.left;
          const cardRight = rect.right - containerRect.left;
          const cardWidth = rect.width;
          const normalCard = wrapper.querySelector(".card-normal");
          const asciiCard = wrapper.querySelector(".card-ascii");
          if (cardLeft < scannerRight && cardRight > scannerLeft) {
            anyScanningActive = true;
            const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
            const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);
            const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
            const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;
            normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
            asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);
            if (!wrapper.hasAttribute("data-scanned") && scannerIntersectLeft > 0) {
              wrapper.setAttribute("data-scanned", "true");
              const scanEffect = document.createElement("div");
              scanEffect.className = "scan-effect";
              wrapper.appendChild(scanEffect);
              setTimeout(() => {
                if (scanEffect.parentNode) scanEffect.parentNode.removeChild(scanEffect);
              }, 600);
            }
          } else {
            if (cardRight < scannerLeft) {
              normalCard.style.setProperty("--clip-right", "100%");
              asciiCard.style.setProperty("--clip-left", "100%");
            } else if (cardLeft > scannerRight) {
              normalCard.style.setProperty("--clip-right", "0%");
              asciiCard.style.setProperty("--clip-left", "0%");
            }
            wrapper.removeAttribute("data-scanned");
          }
        });
        if (window.setScannerScanning) window.setScannerScanning(anyScanningActive);
      }
      updateAsciiContent() {
        document.querySelectorAll(".ascii-content").forEach((content) => {
          if (Math.random() < 0.15) {
            const { width, height } = this.calculateCodeDimensions(400, 250);
            content.textContent = this.generateCode(width, height);
          }
        });
      }
      populateCardLine() {
        this.cardLine.innerHTML = "";
        const cardsCount = 30;
        for (let i = 0; i < cardsCount; i++) {
          const cardWrapper = this.createCardWrapper(i);
          this.cardLine.appendChild(cardWrapper);
        }
      }
      startPeriodicUpdates() {
        setInterval(() => this.updateAsciiContent(), 200);
        const updateClipping = () => {
          this.updateCardClipping();
          requestAnimationFrame(updateClipping);
        };
        updateClipping();
      }
    }

    class ParticleSystem {
      constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.particleCount = 400;
        this.canvas = particleCanvas;
        this.containerWidth = container.offsetWidth;
        this.init();
      }
      init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
          -this.containerWidth / 2,
          this.containerWidth / 2,
          125,
          -125,
          1,
          1000
        );
        this.camera.position.z = 100;
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          alpha: true,
          antialias: true,
        });
        this.renderer.setSize(this.containerWidth, 250);
        this.renderer.setClearColor(0x000000, 0);
        this.createParticles();
        this.animate();
        window.addEventListener("resize", () => this.onWindowResize());
      }
      createParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);
        const velocities = new Float32Array(this.particleCount);
        const canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");
        const half = canvas.width / 2;
        const hue = 217;
        const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
        gradient.addColorStop(0.025, "#fff");
        gradient.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
        gradient.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(half, half, half, 0, Math.PI * 2);
        ctx.fill();
        const texture = new THREE.CanvasTexture(canvas);
        for (let i = 0; i < this.particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * this.containerWidth * 2;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
          positions[i * 3 + 2] = 0;
          colors[i * 3] = 1;
          colors[i * 3 + 1] = 1;
          colors[i * 3 + 2] = 1;
          const orbitRadius = Math.random() * 200 + 100;
          sizes[i] = (Math.random() * (orbitRadius - 60) + 60) / 8;
          velocities[i] = Math.random() * 60 + 30;
        }
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
        this.velocities = velocities;
        const alphas = new Float32Array(this.particleCount);
        for (let i = 0; i < this.particleCount; i++) {
          alphas[i] = (Math.random() * 8 + 2) / 10;
        }
        geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
        this.alphas = alphas;
        const material = new THREE.ShaderMaterial({
          uniforms: {
            pointTexture: { value: texture },
            size: { value: 15.0 },
          },
          vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            varying vec3 vColor;
            uniform float size;
            void main() {
              vAlpha = alpha;
              vColor = color;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = size;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            uniform sampler2D pointTexture;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
              gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          vertexColors: true,
        });
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
      }
      animate() {
        requestAnimationFrame(() => this.animate());
        if (this.particles) {
          const positions = this.particles.geometry.attributes.position.array;
          const alphas = this.particles.geometry.attributes.alpha.array;
          const time = Date.now() * 0.001;
          for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] += this.velocities[i] * 0.016;
            if (positions[i * 3] > this.containerWidth / 2 + 100) {
              positions[i * 3] = -this.containerWidth / 2 - 100;
              positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
            }
            positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;
            const twinkle = Math.floor(Math.random() * 10);
            if (twinkle === 1 && alphas[i] > 0) alphas[i] -= 0.05;
            else if (twinkle === 2 && alphas[i] < 1) alphas[i] += 0.05;
            alphas[i] = Math.max(0, Math.min(1, alphas[i]));
          }
          this.particles.geometry.attributes.position.needsUpdate = true;
          this.particles.geometry.attributes.alpha.needsUpdate = true;
        }
        this.renderer.render(this.scene, this.camera);
      }
      onWindowResize() {
        this.containerWidth = container.offsetWidth;
        this.camera.left = -this.containerWidth / 2;
        this.camera.right = this.containerWidth / 2;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.containerWidth, 250);
      }
      destroy() {
        if (this.renderer) this.renderer.dispose();
        if (this.particles) {
          this.scene.remove(this.particles);
          this.particles.geometry.dispose();
          this.particles.material.dispose();
        }
      }
    }

    class ParticleScanner {
      constructor() {
        this.canvas = scannerCanvas;
        this.ctx = this.canvas.getContext("2d");
        this.animationId = null;
        this.w = container.offsetWidth;
        this.h = 300;
        this.particles = [];
        this.count = 0;
        this.maxParticles = 800;
        this.intensity = 0.8;
        this.lightBarX = this.w / 2;
        this.lightBarWidth = 3;
        this.fadeZone = 60;
        this.scanTargetIntensity = 1.8;
        this.scanTargetParticles = 2500;
        this.scanTargetFadeZone = 35;
        this.scanningActive = false;
        this.baseIntensity = this.intensity;
        this.baseMaxParticles = this.maxParticles;
        this.baseFadeZone = this.fadeZone;
        this.currentIntensity = this.intensity;
        this.currentMaxParticles = this.maxParticles;
        this.currentFadeZone = this.fadeZone;
        this.transitionSpeed = 0.05;
        this.setupCanvas();
        this.createGradientCache();
        this.initParticles();
        this.animate();
        window.addEventListener("resize", () => this.onResize());
      }
      setupCanvas() {
        this.w = container.offsetWidth;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.canvas.style.width = `${this.w}px`;
        this.canvas.style.height = `${this.h}px`;
        this.ctx.clearRect(0, 0, this.w, this.h);
      }
      onResize() {
        this.w = container.offsetWidth;
        this.lightBarX = this.w / 2;
        this.setupCanvas();
      }
      createGradientCache() {
        this.gradientCanvas = document.createElement("canvas");
        this.gradientCtx = this.gradientCanvas.getContext("2d");
        this.gradientCanvas.width = 16;
        this.gradientCanvas.height = 16;
        const half = this.gradientCanvas.width / 2;
        const gradient = this.gradientCtx.createRadialGradient(
          half,
          half,
          0,
          half,
          half,
          half
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(196, 181, 253, 0.8)");
        gradient.addColorStop(0.7, "rgba(139, 92, 246, 0.4)");
        gradient.addColorStop(1, "transparent");
        this.gradientCtx.fillStyle = gradient;
        this.gradientCtx.beginPath();
        this.gradientCtx.arc(half, half, half, 0, Math.PI * 2);
        this.gradientCtx.fill();
      }
      random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      randomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }
      createParticle() {
        const intensityRatio = this.intensity / this.baseIntensity;
        const speedMultiplier = 1 + (intensityRatio - 1) * 1.2;
        const sizeMultiplier = 1 + (intensityRatio - 1) * 0.7;
        return {
          x:
            this.lightBarX +
            this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2),
          y: this.randomFloat(0, this.h),
          vx: this.randomFloat(0.2, 1.0) * speedMultiplier,
          vy: this.randomFloat(-0.15, 0.15) * speedMultiplier,
          radius: this.randomFloat(0.4, 1) * sizeMultiplier,
          alpha: this.randomFloat(0.6, 1),
          decay: this.randomFloat(0.005, 0.025) * (2 - intensityRatio * 0.5),
          originalAlpha: 0,
          life: 1.0,
          time: 0,
          startX: 0,
          twinkleSpeed: this.randomFloat(0.02, 0.08) * speedMultiplier,
          twinkleAmount: this.randomFloat(0.1, 0.25),
        };
      }
      initParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
      }
      updateParticle(particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.time++;
        particle.alpha =
          particle.originalAlpha * particle.life +
          Math.sin(particle.time * particle.twinkleSpeed) * particle.twinkleAmount;
        particle.life -= particle.decay;
        if (particle.x > this.w + 10 || particle.life <= 0) {
          this.resetParticle(particle);
        }
      }
      resetParticle(particle) {
        particle.x =
          this.lightBarX +
          this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2);
        particle.y = this.randomFloat(0, this.h);
        particle.vx = this.randomFloat(0.2, 1.0);
        particle.vy = this.randomFloat(-0.15, 0.15);
        particle.alpha = this.randomFloat(0.6, 1);
        particle.originalAlpha = particle.alpha;
        particle.life = 1.0;
        particle.time = 0;
        particle.startX = particle.x;
      }
      drawParticle(particle) {
        if (particle.life <= 0) return;
        let fadeAlpha = 1;
        if (particle.y < this.fadeZone) {
          fadeAlpha = particle.y / this.fadeZone;
        } else if (particle.y > this.h - this.fadeZone) {
          fadeAlpha = (this.h - particle.y) / this.fadeZone;
        }
        fadeAlpha = Math.max(0, Math.min(1, fadeAlpha));
        this.ctx.globalAlpha = particle.alpha * fadeAlpha;
        this.ctx.drawImage(
          this.gradientCanvas,
          particle.x - particle.radius,
          particle.y - particle.radius,
          particle.radius * 2,
          particle.radius * 2
        );
      }
      drawLightBar() {
        const verticalGradient = this.ctx.createLinearGradient(0, 0, 0, this.h);
        verticalGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        verticalGradient.addColorStop(
          this.fadeZone / this.h,
          "rgba(255, 255, 255, 1)"
        );
        verticalGradient.addColorStop(
          1 - this.fadeZone / this.h,
          "rgba(255, 255, 255, 1)"
        );
        verticalGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        this.ctx.globalCompositeOperation = "lighter";
        const targetGlowIntensity = this.scanningActive ? 3.5 : 1;
        if (!this.currentGlowIntensity) this.currentGlowIntensity = 1;
        this.currentGlowIntensity +=
          (targetGlowIntensity - this.currentGlowIntensity) * this.transitionSpeed;
        const glowIntensity = this.currentGlowIntensity;
        const lineWidth = this.lightBarWidth;
        const glow1Alpha = this.scanningActive ? 1.0 : 0.8;
        const glow2Alpha = this.scanningActive ? 0.8 : 0.6;
        const glow3Alpha = this.scanningActive ? 0.6 : 0.4;
        const coreGradient = this.ctx.createLinearGradient(
          this.lightBarX - lineWidth / 2,
          0,
          this.lightBarX + lineWidth / 2,
          0
        );
        coreGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        coreGradient.addColorStop(
          0.3,
          `rgba(255, 255, 255, ${0.9 * glowIntensity})`
        );
        coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${1 * glowIntensity})`);
        coreGradient.addColorStop(
          0.7,
          `rgba(255, 255, 255, ${0.9 * glowIntensity})`
        );
        coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = coreGradient;
        const radius = 15;
        this.ctx.beginPath();
        this.ctx.roundRect(
          this.lightBarX - lineWidth / 2,
          0,
          lineWidth,
          this.h,
          radius
        );
        this.ctx.fill();
        const glow1Gradient = this.ctx.createLinearGradient(
          this.lightBarX - lineWidth * 2,
          0,
          this.lightBarX + lineWidth * 2,
          0
        );
        glow1Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
        glow1Gradient.addColorStop(
          0.5,
          `rgba(196, 181, 253, ${0.8 * glowIntensity})`
        );
        glow1Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        this.ctx.globalAlpha = glow1Alpha;
        this.ctx.fillStyle = glow1Gradient;
        const glow1Radius = 25;
        this.ctx.beginPath();
        this.ctx.roundRect(
          this.lightBarX - lineWidth * 2,
          0,
          lineWidth * 4,
          this.h,
          glow1Radius
        );
        this.ctx.fill();
        const glow2Gradient = this.ctx.createLinearGradient(
          this.lightBarX - lineWidth * 4,
          0,
          this.lightBarX + lineWidth * 4,
          0
        );
        glow2Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
        glow2Gradient.addColorStop(
          0.5,
          `rgba(139, 92, 246, ${0.4 * glowIntensity})`
        );
        glow2Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        this.ctx.globalAlpha = glow2Alpha;
        this.ctx.fillStyle = glow2Gradient;
        const glow2Radius = 35;
        this.ctx.beginPath();
        this.ctx.roundRect(
          this.lightBarX - lineWidth * 4,
          0,
          lineWidth * 8,
          this.h,
          glow2Radius
        );
        this.ctx.fill();
        if (this.scanningActive) {
          const glow3Gradient = this.ctx.createLinearGradient(
            this.lightBarX - lineWidth * 8,
            0,
            this.lightBarX + lineWidth * 8,
            0
          );
          glow3Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
          glow3Gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
          glow3Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
          this.ctx.globalAlpha = glow3Alpha;
          this.ctx.fillStyle = glow3Gradient;
          const glow3Radius = 45;
          this.ctx.beginPath();
          this.ctx.roundRect(
            this.lightBarX - lineWidth * 8,
            0,
            lineWidth * 16,
            this.h,
            glow3Radius
          );
          this.ctx.fill();
        }
        this.ctx.globalCompositeOperation = "destination-in";
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = verticalGradient;
        this.ctx.fillRect(0, 0, this.w, this.h);
      }
      render() {
        const targetIntensity = this.scanningActive
          ? this.scanTargetIntensity
          : this.baseIntensity;
        const targetMaxParticles = this.scanningActive
          ? this.scanTargetParticles
          : this.baseMaxParticles;
        const targetFadeZone = this.scanningActive
          ? this.scanTargetFadeZone
          : this.baseFadeZone;
        this.currentIntensity +=
          (targetIntensity - this.currentIntensity) * this.transitionSpeed;
        this.currentMaxParticles +=
          (targetMaxParticles - this.currentMaxParticles) * this.transitionSpeed;
        this.currentFadeZone +=
          (targetFadeZone - this.currentFadeZone) * this.transitionSpeed;
        this.intensity = this.currentIntensity;
        this.maxParticles = Math.floor(this.currentMaxParticles);
        this.fadeZone = this.currentFadeZone;
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.drawLightBar();
        this.ctx.globalCompositeOperation = "lighter";
        for (let i = 1; i <= this.count; i++) {
          if (this.particles[i]) {
            this.updateParticle(this.particles[i]);
            this.drawParticle(this.particles[i]);
          }
        }
        const currentIntensity = this.intensity;
        const currentMaxParticles = this.maxParticles;
        if (Math.random() < currentIntensity && this.count < currentMaxParticles) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
        const intensityRatio = this.intensity / this.baseIntensity;
        if (intensityRatio > 1.1 && Math.random() < (intensityRatio - 1.0) * 1.2) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
        if (intensityRatio > 1.3 && Math.random() < (intensityRatio - 1.3) * 1.4) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
        if (intensityRatio > 1.5 && Math.random() < (intensityRatio - 1.5) * 1.8) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
        if (intensityRatio > 2.0 && Math.random() < (intensityRatio - 2.0) * 2.0) {
          const particle = this.createParticle();
          particle.originalAlpha = particle.alpha;
          particle.startX = particle.x;
          this.count++;
          this.particles[this.count] = particle;
        }
        if (this.count > currentMaxParticles + 200) {
          const excessCount = Math.min(15, this.count - currentMaxParticles);
          for (let i = 0; i < excessCount; i++) {
            delete this.particles[this.count - i];
          }
          this.count -= excessCount;
        }
      }
      animate() {
        this.render();
        this.animationId = requestAnimationFrame(() => this.animate());
      }
      setScanningActive(active) {
        this.scanningActive = active;
      }
      getStats() {
        return {
          intensity: this.intensity,
          maxParticles: this.maxParticles,
          currentParticles: this.count,
          lightBarWidth: this.lightBarWidth,
          fadeZone: this.fadeZone,
          scanningActive: this.scanningActive,
          canvasWidth: this.w,
          canvasHeight: this.h,
        };
      }
      destroy() {
        if (this.animationId) {
          cancelAnimationFrame(this.animationId);
        }
        this.particles = [];
        this.count = 0;
      }
    }

    window.cardStream = new CardStreamController();
    window.particleSystem = new ParticleSystem();
    window.particleScanner = new ParticleScanner();
    window.setScannerScanning = (active) => window.particleScanner?.setScanningActive(active);
    window.getScannerStats = () => window.particleScanner?.getStats() || null;

    return () => {
      window.cardStream?.destroy?.();
      window.particleSystem?.destroy();
      window.particleScanner?.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Xeris Web Co.: Pioneering Secure Payments</h1>
        <p className="hero-text">
          XerisCoin ($XERIS)—patent-pending (US #63/887,511)—drives our Layer 1 blockchain with triple consensus (PoW, PoH, PoS) for 10,000+ TPS. Q3 2025 testnet: 100% uptime. Acquire now via pump.fun and unlock tokenized real-world assets.
        </p>

        {/* Payment Transformation Scanner - Moved under header */}
        <div className="payment-transformer">
          <style>{`
            @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap");
            .payment-transformer {
              position: relative;
              width: 100%;
              height: 300px;
              background: #000;
              overflow: hidden;
              margin: 2rem 0;
              border-radius: 10px;
            }
            .payment-transformer * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .payment-transformer .container {
              position: relative;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .payment-transformer .card-stream {
              position: absolute;
              width: 100%;
              height: 250px;
              display: flex;
              align-items: center;
              overflow: visible;
            }
            .payment-transformer .card-line {
              display: flex;
              align-items: center;
              gap: 60px;
              white-space: nowrap;
              cursor: grab;
              user-select: none;
              will-change: transform;
            }
            .payment-transformer .card-line:active, .payment-transformer .card-line.dragging {
              cursor: grabbing;
            }
            .payment-transformer .card-line.css-animated {
              animation: scrollCards 40s linear infinite;
            }
            @keyframes scrollCards {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .payment-transformer .card-wrapper {
              position: relative;
              width: 400px;
              height: 250px;
              flex-shrink: 0;
            }
            .payment-transformer .card {
              position: absolute;
              top: 0;
              left: 0;
              width: 400px;
              height: 250px;
              border-radius: 15px;
              overflow: hidden;
            }
            .payment-transformer .card-normal {
              background: transparent;
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 0;
              color: white;
              z-index: 2;
              position: relative;
              overflow: hidden;
              clip-path: inset(0 0 0 var(--clip-right, 0%));
            }
            .payment-transformer .card-image {
              width: 400px;
              height: 250px;
              object-fit: cover;
              border-radius: 15px;
              transition: all 0.3s ease;
              filter: brightness(1.1) contrast(1.1);
              box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
            }
            .payment-transformer .card-image:hover {
              filter: brightness(1.2) contrast(1.2);
            }
            .payment-transformer .card-ascii {
              background: transparent;
              z-index: 1;
              position: absolute;
              top: 0;
              left: 0;
              width: 400px;
              height: 250px;
              border-radius: 15px;
              overflow: hidden;
              clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
            }
            .payment-transformer .card-logo {
              position: absolute;
              top: 20px;
              right: 20px;
              font-size: 18px;
              font-weight: bold;
              color: white;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }
            .payment-transformer .ascii-content {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: rgba(220, 210, 255, 0.6);
              font-family: "Courier New", monospace;
              font-size: 11px;
              line-height: 13px;
              overflow: hidden;
              white-space: pre;
              animation: glitch 0.1s infinite linear alternate-reverse;
              margin: 0;
              padding: 0;
              text-align: left;
              vertical-align: top;
              box-sizing: border-box;
              -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%);
              mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%);
            }
            @keyframes glitch {
              0% { opacity: 1; }
              15% { opacity: 0.9; }
              16% { opacity: 1; }
              49% { opacity: 0.8; }
              50% { opacity: 1; }
              99% { opacity: 0.9; }
              100% { opacity: 1; }
            }
            .payment-transformer .scan-effect {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.4), transparent);
              animation: scanEffect 0.6s ease-out;
              pointer-events: none;
              z-index: 5;
            }
            @keyframes scanEffect {
              0% { transform: translateX(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(100%); opacity: 0; }
            }
            .payment-transformer #particleCanvas {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 100%;
              height: 250px;
              z-index: 0;
              pointer-events: none;
            }
            .payment-transformer #scannerCanvas {
              position: absolute;
              top: 50%;
              left: -3px;
              transform: translateY(-50%);
              width: 100%;
              height: 300px;
              z-index: 15;
              pointer-events: none;
            }
            .payment-transformer .scanner {
              display: none;
            }
          `}</style>
          <div ref={containerRef} className="container">
            <canvas ref={particleCanvasRef} id="particleCanvas"></canvas>
            <canvas ref={scannerCanvasRef} id="scannerCanvas"></canvas>
            <div className="scanner"></div>
            <div ref={cardStreamRef} className="card-stream">
              <div ref={cardLineRef} className="card-line"></div>
            </div>
          </div>
        </div>

        <div className="partnership-teaser">
          <div className="card glow-card fade-in">
            <FaHandshake className="partnership-icon" />
            <h3>Strategic Alliance: Activate Supplements</h3>
            <p>Integrating biotech innovation: Tokenize wellness protocols for seamless liquidity. 7% equity + 20% revenue share, targeting $50M market cap.</p>
            <button className="cta-btn" onClick={() => window.location.href = '/about#partnerships'}>
              Learn More
            </button>
          </div>
        </div>
        <div className="button-group">
          <Link to="/projects" className="cta-button secondary-btn">Explore Innovations</Link>
          <Link to="/xeriscoin" className="cta-button glowing-btn">Discover XerisCoin</Link>
        </div>
        <div className="alpha-release-callout">
          <FaCode className="alpha-icon" />
          <h3>XerisCoin Alpha Released</h3>
          <p>Download the local alpha node from GitHub and mine blocks today—patent-pending triple consensus in action.</p>
          <a href="https://github.com/ZZachWWins/xeriscoin_testnet_localalpha_v1" target="_blank" rel="noopener noreferrer" className="cta-button glowing-btn">
            Get Alpha Node
          </a>
        </div>
      </div>

      <div className="milestones-section">
        <h2 className="milestones-title">Key Milestones</h2>
        <div className="milestones-grid">
          <div className="milestone-card fade-in">
            <FaTrophy className="milestone-icon" />
            <h3>Testnet Excellence</h3>
            <p>Q3 2025: 10,000+ TPS with 100% uptime—enterprise scalability proven.</p>
          </div>
          <div className="milestone-card fade-in">
            <FaFileAlt className="milestone-icon" />
            <h3>Patent Secured</h3>
            <p>US #63/887,511 for triple consensus innovation.</p>
          </div>
          <div className="milestone-card fade-in">
            <FaHandshake className="milestone-icon" />
            <h3>Biotech Synergy</h3>
            <p>Tokenizing wellness assets with Activate Supplements for global liquidity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
class CarouselComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.slides = [];
        this.currentIndex = 0;

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                #slides-container {
                    position: relative;
                    overflow: hidden;
                    min-height: 150px; /* Prevent collapse and content jumping */
                }

                ::slotted(div) {
                    width: 100%;
                    display: none; /* Hide slides by default */
                }
                ::slotted(div.active) {
                    display: block; /* Show only the active slide */
                }

                #nav-container {
                    text-align: center;
                    margin-top: 1.5rem;
                }

                .nav-button {
                    background-color: #ff6f61;
                    color: white;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem 1rem;
                    font-size: 1.5rem;
                    border-radius: 5px;
                    margin: 0 0.5rem;
                    transition: background-color 0.3s ease;
                }
                .nav-button:hover {
                    background-color: #e65a50;
                }
                #page-indicator {
                    font-size: 1.2rem;
                    margin: 0 1rem;
                    color: #333;
                }
            </style>
            <div>
                <div id="slides-container">
                    <slot></slot>
                </div>
                <div id="nav-container">
                    <button id="prevBtn" class="nav-button">&lt;</button>
                    <span id="page-indicator"></span>
                    <button id="nextBtn" class="nav-button">&gt;</button>
                </div>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Defer slide initialization to allow slotted content to be ready
        setTimeout(() => {
            const slot = this.shadowRoot.querySelector('slot');
            this.slides = slot.assignedElements();
            if (this.slides.length > 0) {
                this.updatePageIndicator();
                this.showSlide(this.currentIndex);
            }
        }, 0);

        this.shadowRoot.querySelector('#nextBtn').addEventListener('click', () => this.nextSlide());
        this.shadowRoot.querySelector('#prevBtn').addEventListener('click', () => this.prevSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        this.updatePageIndicator();
    }

    nextSlide() {
        if (this.slides.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        if (this.slides.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    updatePageIndicator() {
        if (this.slides.length > 0) {
            const indicator = this.shadowRoot.querySelector('#page-indicator');
            indicator.textContent = `${this.currentIndex + 1}/${this.slides.length}`;
        }
    }
}

customElements.define('carousel-component', CarouselComponent);

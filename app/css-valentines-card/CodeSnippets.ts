export const heart: string = `
.heart {
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    position: relative;
    transform: rotate(-45deg);
    box-shadow: -10px 10px 90px #f20044;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 1px;
    z-index: 1;
}

.heart:before {
    content: '';
    position: absolute;
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    top: -60%;
    border-radius: var(--heart-border-radius);
    box-shadow: -10px -10px 90px #f20044;
}

.heart:after {
    content: '';
    position: absolute;
    height: var(--heart-size);
    width: var(--heart-size);
    background: #f20044;
    right: -60%;
    border-radius: var(--heart-border-radius);
    box-shadow: 10px 10px 90px #f20044;
    transition: transform 0.5s ease-in-out;
}
`;

export const animations: string = `
.animate-arrow {
    animation: shoot-arrow 1s ease-out forwards;
    opacity: 1;
}

@keyframes shoot-arrow {
    0% {
        transform: translate(100vw, 60vh) rotate(var(--arrow-rotation));
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -45%) rotate(var(--arrow-rotation));
        opacity: 1;
    }
}

@keyframes scale-heart {
    0% {
        transform: rotate(-45deg) scale(1);
    }
    100% {
        transform: rotate(-45deg) scale(var(--heart-scale));
    }
}

.scale-heart {
    animation: scale-heart 1s ease-in-out forwards;
    animation-delay: 1s;
}
`;
import { css } from "lit";

export const mainLogoStyles = css`
  :host {
    font-family: 'Fira Sans', sans-serif;
    --text-color: #000;
    --text-alt-color: #FFF;
    --background-color: #FFF
    --scale: 3;
    background: var(--background-color);
    padding: calc(1rem * var(--scale)) calc(3rem * var(--scale));
    display: flex;
      width: fit-content;
      height: fit-content;
    align-items: center;
    justify-content: center;
  }

  .fermenter {
    border: calc(4px * var(--scale)) solid var(--text-color);
    border-bottom: none;
    width: calc(40px * var(--scale));
    height: calc(50px * var(--scale));
    border-radius: 4px;
    position: relative;
    margin-top: calc(-2rem * var(--scale));

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .top-lid {
    border-bottom: calc(4px * var(--scale)) solid var(--text-color);
    margin-top: calc(-0.85rem * var(--scale));
    width: 120%;
    margin-left: -10%;
    display: flex;
    justify-content: center;
  }

  .top-lid-cap {
    width: 20%;
    border: calc(2px * var(--scale)) solid var(--text-color);
    background: var(--text-color);
  }

  .window {
    width: calc(20px * var(--scale));
    height: calc(20px * var(--scale));
    border: calc(4px * var(--scale)) solid var(--text-color);
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  .wave {
    width: 60%;
    height: 50%;
    background: var(--text-color);
    border-radius: 40% 40% 0 0;
  }

  .liquid {
    width: 60%;
    height: 51%;
    margin: auto;
    background: var(--text-color);
    transform: translate(0px, 120%) rotate(45deg);
    position: relative;
  }

  .liquid svg {
    position: absolute;
    width: 145%;
    transform: rotate(-45deg)
      translate(calc(-0.6px * var(--scale)), calc(-24.2px * var(--scale)));
    fill: var(--text-color);
  }

  .bubble {
    --bubble-size: 1;
    height: calc(5px * var(--bubble-size) * var(--scale));
    width: calc(5px * var(--bubble-size) * var(--scale));
    background: var(--text-alt-color);
    border-radius: 50%;
    position: absolute;
  }

  .bottom-part {
    position: relative;
  }

  .bottom-part *:not(.bottom-part--bottom) {
    height: calc(4px * var(--scale));
    width: 85%;
    background: var(--text-color);
    border-radius: 4px;
  }

  .bottom-part--left {
    transform: rotateZ(50deg)
      translate(calc(8px * var(--scale)), calc(18px * var(--scale)));
  }
  .bottom-part--right {
    transform: rotateZ(-50deg)
      translate(calc(-1px * var(--scale)), calc(20px * var(--scale)));
  }
  .bottom-part--bottom {
    height: calc(5px * var(--scale));
    width: calc(5px * var(--scale));
    background: var(--text-color);
    position: absolute;
    bottom: calc(-27px * var(--scale));
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
  }

  .legs {
    position: absolute;
    bottom: -60%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .leg {
    height: calc(25px * var(--scale));
    width: calc(4px * var(--scale));
    background: var(--text-color);
  }

  .label {
    margin-left: calc(1rem * var(--scale));
    font-size: calc(12px * var(--scale) * 2);
    color: var(--text-color);
  }

  .label span {
    padding: calc(0.3rem * var(--scale));
    background: var(--text-color);
    color: var(--text-alt-color);
  }
`;

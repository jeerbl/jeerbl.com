<template>
  <div class="above-the-fold">
    <h1>JB/ TO</h1>
    <div class="details">
      Jerome Brunel is a <span class="details-highlight">web developer</span><br>
      who <span class="details-highlight">gets shit done</span> from Toronto, ON.
    </div>
    <div class="scroll">
      ↓
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/colors';

.above-the-fold {
  min-height: 100vh;
  text-align: center;
  position: relative;

  h1 {
    font-size: 6rem;
    margin: calc(50vh - 8rem) 0 0;
    font-weight: 900;
    text-align: center;
    position: relative;
    display: inline-block;
    background-color: $blue;
    position: relative;
    padding: 0.125rem 1rem;
    color: #fff;
    transform: translateY(3rem);
    animation: slide-up 0.25s ease-out 2s;
    animation-fill-mode: forwards;
  }

  .details {
    width: 100%;
    margin-top: 0.75rem;
    text-align: center;
    font-size: 1.75rem;
    line-height: 2.75rem;
    color: #000;
    opacity: 0;
    animation: opacity 0.25s ease-in 2s, slide 0.25s ease-out 2s;
    animation-fill-mode: forwards;

    .details-highlight {
      display: inline-block;
      border-bottom: 1px dotted #ddd;
      line-height: 2.25rem;
    }
  }

  .scroll {
    font-size: 1.5rem;
    color: #000;
    animation: opacity 0.25s ease-in 4s, bounce 1s ease-out infinite;
    animation-fill-mode: forwards;
    opacity: 0;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(3rem);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    transform: translateY(-1rem);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-0.25rem);
  }

  100% {
    transform: translateY(0);
  }
}
</style>

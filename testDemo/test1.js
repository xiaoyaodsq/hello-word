function debounce(fn, time) {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setInterval(() => {
      fn.apply(this, arguments);
    }, time);
  }
}

function throtte(fn, time) {
  let activeTime = 0;
  return () => {
    const current = Data.now();
    if(current - activeTime > time){
      fn.apply(this, arguments);
      activeTime = Data.now();
    }
  }
}

function getSoutce(obj, path, defaultValue) {
  
}
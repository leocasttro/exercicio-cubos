const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function() {
    if (this.ligado === true) {
      console.log(`Carro já está ligado. Velocidade: ${this.velocidade}`);
    } else {
      this.ligado = true;
      console.log('Carro ligado');
    }
  },
  desligar: function() {
    if (this.ligado === false) {
      console.log(`Carro já está desligado. Velocidade: ${this.velocidade}`);
    } else {
      this.ligado = false;
      console.log('Carro desligado');
    }
  },
  acelerar: function() {
    if (this.ligado === true) {
      this.velocidade += 10;
      console.log(`Velocidade atual: ${this.velocidade}`);
    } else {
      console.log('Carro precisa estar ligado');
    }
  },
  desacelerar: function() {
    if (this.ligado === true) {
      this.velocidade -= 10;
      console.log(`Velocidade atual: ${this.velocidade}`);
    } else {
      console.log('Carro precisa estar ligado');
    }
  }
}

carro.ligar();
carro.acelerar()
carro.ligar()
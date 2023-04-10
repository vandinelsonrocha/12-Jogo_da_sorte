function carregarPagina()  {
    let gerar = document.getElementById('btn');
    let numero1 = document.getElementById('num1');
    let numero2 = document.getElementById('num2');

    let pontosJog1 = document.getElementById('pontosJog1');
    pontosJog1.value = 1;
    let pontosJog2 = document.getElementById('pontosJog2');
    pontosJog2.value = 1;

    let terminarJogo = document.getElementById('terminar-jogo');
    terminarJogo.style.display = "none";

    let novaRodada = document.getElementById('nova-rodada');
    novaRodada.style.display = "none";
    let rodada = document.getElementById('rodada');
    rodada.style.display = "none";
    let numRodadas = 2;

    /*
    Borda vermelha - input vazio
    Borda verde - input não vazia
    */
    let jogador1 = document.getElementById('jogador1');
    let jogador2 = document.getElementById('jogador2');

    jogador1.addEventListener('input', function()  {
        if(this.value.length > 0)  {
            this.style.border = "1px solid green";
        }
        else  {
            this.style.border = "1px solid red";
        }
    });

    jogador2.addEventListener('input', function()  {
        if(this.value.length > 0)  {
            this.style.border = "1px solid green";
        }
        else  {
            this.style.border = "1px solid red";
        }
    });

    numero1.addEventListener('input', function()  {
        if(this.value.length > 0)  {
            this.style.border = "1px solid green";
        }
        else  {
            this.style.border = "1px solid red";
        }
    });

    numero2.addEventListener('input', function()  {
        if(this.value.length > 0)  {
            this.style.border = "1px solid green";
        }
        else  {
            this.style.border = "1px solid red";
        }
    });

    //Condições para validar o botão ok
    document.getElementById('ok').addEventListener('click', function()  {
        document.getElementById('nomes-iguais').textContent = "";

        let jog1 = document.getElementById('jog1');
        let jog2 = document.getElementById('jog2');

        if(jogador1.value.length == "" && jogador2.value.length == "")  {
            jogador1.style.border = "1px solid red";
            jogador2.style.border = "1px solid red";
        }
        else if(jogador1.value.length == "" && !(jogador2.value.length == ""))  {
            jogador1.style.border = "1px solid red";
        }
        else if(!(jogador1.value.length == "") && jogador2.value.length == "")  {
            jogador2.style.border = "1px solid red";
        }
        else if(jogador1.value == jogador2.value)  {
            document.getElementById('nomes-iguais').textContent = "Os nomes devem ser diferentes.";
        }
        else if(!(jogador1.value.length == "") && !(jogador2.value.length == ""))  {
            jog1.textContent = `${jogador1.value}`;
            jog2.textContent = `${jogador2.value}`;
            document.getElementById('inserirNome').style.display = "none";

            document.getElementById('rodada').style.display = "block";
        }
    });

    //Condições para gerar o número
    gerar.addEventListener("click", function()  {
        let jogador1 = document.getElementById('jogador1');
        let jogador2 = document.getElementById('jogador2');

        let numAleatorio = document.getElementById('aleatorio');
        let numGerado = 1 + Math.trunc(9*Math.random()); //variável que retorna um número aleatório inteiro entre 1 e 9

        let mensagem = document.getElementById('mensagem');
        mensagem.textContent = "";

        if(jogador1.value.length == "" && jogador2.value.length == "")  {
            jogador1.style.border = "1px solid red";
            jogador2.style.border = "1px solid red";
        }
        else if(jogador1.value && jogador2.value.length == "")  {
            jogador2.style.border = "1px solid red";
        }
        else if(jogador1.value.length == "" && jogador2.value)  {
            jogador1.style.border = "1px solid red";
        }
        else if(document.getElementById('inserirNome').style.display == "none" && numero1.value.length == "" && numero2.value.length == "")  {
            numero1.style.border = "1px solid red";
            numero2.style.border = "1px solid red";
        }
        else if(document.getElementById('inserirNome').style.display == "none" && numero1.value && numero2.value.length == "")  {
            numero2.style.border = "1px solid red";
        }
        else if(document.getElementById('inserirNome').style.display == "none" && numero1.value.length == "" && numero2.value)  {
            numero1.style.border = "1px solid red";
        }
        else if(numero1.value<1 || numero1.value>9 || numero2.value<1 || numero2.value>9)  {
            mensagem.textContent = "Ambos os números devem ser entre 1 e 9";
        }
        //Condiçoes verificadas, agora começar a gerar o número:
        else if(document.getElementById('inserirNome').style.display == "none" && numero1.value && numero2.value)  {
            mensagem.textContent = "";
            if(pontosJog1.value <=2 && pontosJog2.value <= 2)  {
                numAleatorio.innerHTML = `${numGerado}`;
            }
            if(numero1.value == numGerado && numero2.value == numGerado && pontosJog1.value <= 2 && pontosJog2.value <= 2)  {
                mensagem.textContent = "Parabéns jogadores!";

                pontosJog1.textContent = `Pontos: ${pontosJog1.value}`;
                pontosJog1.value++;
                pontosJog2.textContent = `Pontos: ${pontosJog2.value}`;
                pontosJog2.value++;

                //Empate na rodada
                if(pontosJog1.value == 3 && pontosJog2.value == 3)  {
                    mensagem.textContent = "Empate nesta rodada!";
                    novaRodada.style.display = "block";
                    terminarJogo.style.display = "block";
                }
                //--------------------------------------LIMPAR NUMGERADO E MENSAGEM AQUI----------------------------------------
                novaRodada.addEventListener('click', function()  {
                    novaRodada.style.display = "none";
                    numAleatorio.textContent = "";
                    mensagem.textContent = "";
                });
            }
            else if(numero1.value == numGerado && numero2.value != numGerado && pontosJog1.value <= 2)  {
                if(pontosJog2.value != 3)  {
                    pontosJog1.textContent = `Pontos: ${pontosJog1.value}`;
                    pontosJog1.value++;
                }
                //Jogador 1 vence a rodada
                if(pontosJog1.value == 3 && pontosJog2.value != 3)  {
                    mensagem.textContent = `Parabéns ${jogador1.value}, você venceu esta rodada!`;
                    novaRodada.style.display = "block";
                    terminarJogo.style.display = "block";
                }
                //--------------------------------------LIMPAR NUMGERADO E MENSAGEM AQUI----------------------------------------
                novaRodada.addEventListener('click', function()  {
                    novaRodada.style.display = "none";
                    numAleatorio.textContent = "";
                    mensagem.textContent = "";
                });
            }
            else if(numero1.value != numGerado && numero2.value == numGerado && pontosJog2.value <= 2)  {
                if(pontosJog1.value != 3)  {
                    pontosJog2.textContent = `Pontos: ${pontosJog2.value}`;
                    pontosJog2.value++;
                }
                //Jogador 2 vence a rodada
                if(pontosJog2.value == 3 && pontosJog1.value != 3)  {
                    mensagem.textContent = `Parabéns ${jogador2.value}, você venceu esta rodada!`;
                    novaRodada.style.display = "block";
                    terminarJogo.style.display = "block";
                }
                //--------------------------------------LIMPAR NUMGERADO E MENSAGEM AQUI----------------------------------------
                novaRodada.addEventListener('click', function()  {
                    novaRodada.style.display = "none";
                    numAleatorio.textContent = "";
                    mensagem.textContent = "";
                });
            }
        }
    });
    //Começar nova rodada:
    novaRodada.addEventListener('click', function()  {
        rodada.textContent = `Rodada ${numRodadas}`;
        numRodadas++;
        novaRodada.style.display = "none";
        //------------------pontos, mensagem e num gerado tem que resetar----------------------
        pontosJog1.value = 0;  
        pontosJog1.textContent = `Pontos: ${pontosJog1.value}`;
        pontosJog1.value ++;

        pontosJog2.value = 0;  
        pontosJog2.textContent = `Pontos: ${pontosJog2.value}`;
        pontosJog2.value ++;

        numero1.value = "";
        numero2.value = "";

    });

    //Regras do jogo
    let regras = document.getElementById('regras-jogo');
    document.getElementById('regras').style.display = 'none';
    regras.addEventListener('click', function()  {
        document.getElementById('regras').style.display = 'block';
    }); 
    
    document.getElementById('esconder-regras').addEventListener('click', function()  {
        document.getElementById('regras').style.display = 'none';
    });
}


/*
FALTA IMPLEMENTAR:
2 - funcionalidade botão Terminar jogo (falta só inserir o conteúdo da página)
3 - temporizador de jogo (será q nn fica para outro projeto?)
*/
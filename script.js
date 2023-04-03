function carregarPagina()  {
    let gerar = document.getElementById('btn');
    let numero1 = document.getElementById('num1');
    let numero2 = document.getElementById('num2');

    let pontosJog1 = document.getElementById('pontosJog1');
    pontosJog1.value = 1;
    let pontosJog2 = document.getElementById('pontosJog2');
    pontosJog2.value = 1;

    //Condições para validar o botão ok
    document.getElementById('ok').addEventListener('click', function()  {
        let jogador1 = document.getElementById('jogador1');
        let jogador2 = document.getElementById('jogador2');
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
        else if(!(jogador1.value.length == "") && !(jogador2.value.length == ""))  {
            jog1.textContent = `${jogador1.value}`;
            jog2.textContent = `${jogador2.value}`;
            document.getElementById('inserirNome').style.display = "none";
        }
    });

    //Condições para gerar o número
    gerar.addEventListener("click", function()  {
        let jogador1 = document.getElementById('jogador1');
        let jogador2 = document.getElementById('jogador2');

        let mensagem = document.getElementById('mensagem');
        let numAleatorio = document.getElementById('aleatorio');
        let numGerado = 1 + Math.trunc(9*Math.random()); //variável que retorna um número aleatório inteiro entre 1 e 9

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

        //Condiçoes verificadas, agora começar a gerar o número:
        else if(document.getElementById('inserirNome').style.display == "none" && numero1.value && numero2.value)  {
            numAleatorio.innerHTML = `${numGerado}`;
            if(numero1.value == numGerado && numero2.value == numGerado)  {
                mensagem.textContent = "Parabéns jogadores!";

                pontosJog1.textContent = `Pontos: ${pontosJog1.value}`;
                pontosJog1.value++;
                pontosJog2.textContent = `Pontos: ${pontosJog2.value}`;
                pontosJog2.value++;

                //Empate na rodada
                if(pontosJog1.value == 3 && pontosJog2.value == 3)  {
                    mensagem.textContent = "Empate nesta rodada!"
                }
            }
            else if(numero1.value == numGerado && numero2.value != numGerado)  {
                mensagem.textContent = `Ponto para ${jogador1.value}`;
                pontosJog1.textContent = `Pontos: ${pontosJog1.value}`;
                pontosJog1.value++;

                //Jogador 1 vence a rodada
                if(pontosJog1.value == 3)  {
                    mensagem.textContent = `Parabéns ${jogador1.value}, você venceu esta rodada!`;
                }
            }
            else if(numero1.value != numGerado && numero2.value == numGerado)  {
                mensagem.textContent = `Ponto para ${jogador2.value}`;
                pontosJog2.textContent = `Pontos: ${pontosJog2.value}`;
                pontosJog2.value++;

                //Jogador 2 vence a rodada
                if(pontosJog2.value == 3)  {
                    mensagem.textContent = `Parabéns ${jogador2.value}, você venceu esta rodada!`;
                }
            }
        }
    });
}
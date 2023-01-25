/*
- As funções e comandos javascript podem ser utilizados no lado "Cliente" utilizando os Elementos DOM
- São utilizados para manipular os elementos HTML e criar interações no documento/página
- Para visualizar o resultado deste código é necessário fazer o procedimento abaixo:
1 - Vá até o arquivo "html_DOM.html"
2 - Localize a tag <script>
3 - Altere o documento para o que você deseja visualizar
4 - Clique com o botão direito e acesse a opção "Open with live server"
*/

//- São operações realizadas no HTML pegando os elementos pelo ID atribuido
//Sintaxe: document.getElementById("<nome-id>")

//Atribuindo os elementos ID para uma constante 
const div1 = document.getElementById("d1")

document.write("<br>") //Apenas para pular as linhas no página

document.write(div1) // Exibe o elemento
document.write("<br>")
document.write(div1.id) // Exibe o ID atribuiddo ao elemento
document.write("<br>")
document.write(div1.innerText) // Exibe o conteudo armazenado no elemento
document.write("<br>")
document.write(div1.innerHTML = "div2") // Altera o conteudo armazenado no elemento
document.write("<br>")
div1.style="color:red; font-size:50px;" // Altera o atributo "color" do elemento
var n=Array();
var x=0;
var soma=0;
do{
n[x]=parseFloat(prompt("Digite um número"));
x++;

}while(n[x-1] !==0);

for(let y=0;y<n.length;y++){
soma+=n[y]
}
alert(soma)

window.addEventListener("load",function(){
	init_component_tree();
});

//

function init_component_tree(){
	var treepacks=document.getElementsByClassName("treePack");
	for(var i=0;i<treepacks.length;i++){
		proceedTreePack(treepacks[i]);
	}
}

function proceedTreePack(treePack){
	treePack.addEventListener("click",addTreePackEventF);
	
	function addTreePackEventF(e){
		if(typeof(treePack.getAttribute("opened"))=="string"){
			treePack.removeAttribute("opened");
		}else{
			treePack.setAttribute("opened","");
		}
	}
}


window.addEventListener("load",function(){
	init_treeAndTab();
});

//

var lastOpenedTreeItem=null;
var lastOpenedTabItem=null;
var lastOpenedTabItemIframe=null;

function init_treeAndTab(){
	var treeItems=document.getElementsByClassName("treeItem");
	var itemsInfo=[];
	for(var i=0;i<treeItems.length;i++){
		proceedTreeAndTabItem(treeItems[i]);
	}
}

function proceedTreeAndTabItem(treeItem){
	var isHidden=true;
	var tabItem=document.createElement("div");
	var tabItemHitArea=document.createElement("div");
	var tabItemRefresh=document.createElement("div");
	var tabItemClose=document.createElement("div");
	var tabItemIframe=document.createElement("iframe");
	tabItem.setAttribute("class","tabItem");
	tabItem.setAttribute("hidden","");
	tabItemHitArea.setAttribute("class","tabItemContent");
	tabItemHitArea.setAttribute("title",treeItem.textContent);
	tabItemHitArea.innerHTML=treeItem.textContent;
	tabItemRefresh.setAttribute("class","tabRefresh");
	tabItemClose.setAttribute("class","tabClose");
	tabItem.appendChild(tabItemHitArea);
	tabItem.appendChild(tabItemRefresh);
	tabItem.appendChild(tabItemClose);
	tabItemIframe.setAttribute("class","contentIframe");
	tabItemIframe.setAttribute("hidden","");
	
	document.getElementById("tabInnerArea").appendChild(tabItem);
	document.getElementById("contentArea").appendChild(tabItemIframe);
	
	treeItem.addEventListener("click",clickTreeItemF);
	tabItemHitArea.addEventListener("click",clickTabItemF);
	tabItemRefresh.addEventListener("click",clickTabItemRefreshF);
	tabItemClose.addEventListener("click",clickTabItemCloseF);
	
	function clickTreeItemF(e){
		if(isHidden==true){
			createItem();
		}
		openItem();
	}
	function clickTabItemF(e){
		openItem();
	}
	function clickTabItemRefreshF(e){
		tabItemIframe.contentWindow.location.reload(true);		
	}
	function clickTabItemCloseF(e){
		deleteItem();
	}
	
	function createItem(){
		document.getElementById("tabInnerArea").insertBefore(tabItem,document.getElementById("tabInnerArea").firstChild);
		tabItem.removeAttribute("hidden");
		tabItemIframe.removeAttribute("hidden");	
		tabItemIframe.src=treeItem.getAttribute("link");
		isHidden=false;
	}
	function openItem(){
		if(lastOpenedTreeItem!=null){
			lastOpenedTabItem.removeAttribute("opened");
			lastOpenedTabItemIframe.removeAttribute("opened");
		}
		lastOpenedTreeItem=treeItem;
		lastOpenedTabItem=tabItem;
		lastOpenedTabItemIframe=tabItemIframe;
		tabItem.setAttribute("opened","");
		tabItemIframe.setAttribute("opened","");
	}
	function deleteItem(){	
		if(lastOpenedTreeItem==treeItem){
			lastOpenedTreeItem=null;
			lastOpenedTabItem=null;
			lastOpenedTabItemIframe=null;
		}
		tabItem.setAttribute("hidden","");
		tabItemIframe.setAttribute("hidden","");
		tabItem.removeAttribute("opened");
		tabItemIframe.removeAttribute("opened");	
		tabItemIframe.src="";	
		isHidden=true;
	}
	
}
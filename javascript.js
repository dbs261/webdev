function f1()
{   
    var inp=document.getElementById('input').value;
    var arr=document.getElementById('link');
    //write an algo to find nearest match
    inp=inp.toLowerCase();
    if(inp=='metube')
    {
        arr.innerHTML='<a href="youtube.html" target="_blank"><button>click here</button></a>';
    }
    else if(inp=='zetflix')
    {
        arr.innerHTML='<a href="zetflix.html" target="_blank"><button>click here</button></a>';
    }
    else if(inp=='kmail')
    {
        arr.innerHTML='<a href="https://accounts.google.com/" target="_blank"><button>click here</button></a>';
    }
    else
    {
        arr.innerHTML='<button>click here</button>';
    }
}

function f2()
{
    var linkarr,i,j,vidname;

    var inp=document.getElementById('input').value;
    var arr=document.getElementById('video');
    var drop=document.getElementById('dropdown');
    var droplink=drop.getElementsByTagName('li');
    
    for(i=0;i<droplink.length;i++)
    {
        droplink[i].style.display='none';
    }

    //drop.innerHTML='';
    inp=inp.toLowerCase();
 if(inp)
 {
    if(inp=='wwe wrestlemania full show day 2')
    {
        arr.innerHTML='<a href="https://www.youtube.com/watch?v=y_yaKOrwv0"><button id="searchbutton">Search</button></a>';
    }
    else if(inp=='inside the ropes')
    {
        arr.innerHTML='<a href="https://www.youtube.com/watch?v=nsArbU_KRbE"><button id="searchbutton">Search</button></a>';
    }
    else if(inp=='stranger things steve and dustin appreciation video')
    {
        arr.innerHTML='<a href="https://www.youtube.com/watch?v=4XOVDRb5T9k"><button id="searchbutton">Search</button></a>';
    }
    else if(inp=='got best moments')
    {
        arr.innerHTML='<a href="https://www.youtube.com/watch?v=wZuKMXRw5vc"><button id="searchbutton">Search</button></a>';
    }
    else
    {
        //arr.innerHTML='<button>click here</button>';
        j=0;
        linkarr=document.getElementsByClassName('vidname');

        for(i=0;i<linkarr.length;i++)
        {
            vidname=linkarr[i].textContent.toLowerCase();
            // console.log(vidname);
            if(vidname.indexOf(inp.toLowerCase())>-1)
            {
                //vidlist[j++]=vidname;
        
                droplink[i].style.display='';
            }
            else
            {
                droplink[i].style.display='none';
            }
        }
        
    }
 }
}




import React from 'react'
function TitleText(props){
    
    const level=Number(props.level)
    let data=null;
    if(level===1){
      data =  <h1 className={props.className}>{props.text}</h1>    
    }else if(level===2){
        data =  <h2 className={props.className}>{props.text}</h2>   
    }else if(level===3){
        data =  <h3 className={props.className}>{props.text}</h3>
    }else if(level===4){
        data =  <h4 className={props.className}>{props.text}</h4>
    }else if(level===5){
        data =  <h5 className={props.className}>{props.text}</h5>
    }else if(level===6){
        data =  <h6 className={props.className}>{props.text}</h6>
    }else{
        data = 'provide the heading level as level'
    }

    return(
        <>{data}</>
    )
}
export default TitleText
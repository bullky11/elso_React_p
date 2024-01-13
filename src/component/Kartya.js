export default function Kartya (props){
    function kattintas(){
        console.log(props.obj.id)
        props.kattintas(props.obj.id);
    }
return(
<div class="card">
          <div className="card-header">
            <p>Szia {props.obj.nev} !</p>
          </div>
          <div className="card-body">
            <img
              className="img-thumbnail" src={props.obj.img}
              alt=""
            />
            <span>A kutya kora: {props.obj.kor} éves</span>
          </div>
          <div className="card-footer"> <button className="btn btn-succes" type="button" onClick={kattintas}>vigyél haza</button> </div>
        </div>

);



};
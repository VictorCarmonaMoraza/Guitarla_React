export default function Guitar({guitar}) {

// console.log(props.price)
// console.log(props.auth)
const {name, price, image, description} = guitar

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                {/* Opcion 1 */}
                <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                {/* Opcion 2 */}
                {/* <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3> */}
                <p>{description}</p>
                {/* Opcion 1 */}
                <p className="fw-black text-primary fs-3">${guitar.price}</p>
                {/* Opcion 2 */}
                {/* <p className="fw-black text-primary fs-3">${price}</p> */}
                <button
                    type="button"
                    className="btn btn-dark w-100"
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
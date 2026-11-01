import "./Modal.css"
import { IoMdClose } from "react-icons/io";
function Modal() {
    return (
        <>
            <main className="modal">
                <div className="modal-box">
                    <nav className="modal-cabec">
                        <h2>Modal Nome</h2>
                        <button className="modal-cabec-btn">
                             <IoMdClose />    
                        </button>
                    </nav>
                    <section>
                        <input type="text" />
                    </section>
                </div>
            </main>
        </>
    );
}

export default Modal;

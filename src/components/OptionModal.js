import React from 'react';
import Modal from 'react-modal';

const  OptionModal = (props) => (
            <Modal
                isOpen={!!props.SelectOption}
                contentLabel="Example Modal"
                onRequestClose={props.handleModalClear}

            >
                <h3>Selected Option</h3>
                {props.SelectOption && <p>{props.SelectOption}</p>}
                <button onClick={props.handleModalClear}>Okey</button>
            </Modal>
            )


export default OptionModal;
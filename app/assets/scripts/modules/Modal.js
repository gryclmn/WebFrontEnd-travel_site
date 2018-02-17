import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }
    
    events() {
        // clicking open modal button
        this.openModalButton.click(this.openModal.bind(this));
        
        // clicking x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        
        // pushes escape key
    }
    
    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;
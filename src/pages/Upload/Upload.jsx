import './Upload.scss';
import thumbnail from '../../assets/images/pictures/Upload-video-preview.jpg';

function Upload(){
    return(
        <section className='upload-section'>
            <h1 className='upload-section__title'>Upload Video</h1>
            <form className='form'>
                <section className='form-image-inputs-wrap'>   
                    <section className='form-thumbnail-section'>
                        <label className='form__item-label'>
                            VIDEO THUMBNAIL
                            <img className='form__thumbnail-image' src={thumbnail} alt="" />
                        </label>
                    </section>
                    <section className='details-input-section'>
                        <label className='form__item-label' htmlFor="title" >
                            TITLE YOUR VIDEO
                            <input className='form__item-input' type="text" name='title' placeholder='Add a title to your video'/>
                        </label>
                        <label className='form__item-label' htmlFor="description">
                            ADD A VIDEO DESCRIPTION
                            <textarea className='form__item-input form__item-input--textarea' name="description" placeholder='Add a description to your video'></textarea>
                        </label>
                    </section>
                </section>
                <section className='form__buttons-wrap'>
                    <button className='default-button form__publish-button'>PUBLISH</button>
                    <button className='default-button form__cancel-button'>CANCEL</button>
                </section>
            </form>
        </section>
    )
}

export default Upload;
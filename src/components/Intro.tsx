import styles from './Intro.module.css';

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h3>Hello! My name is EV.</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni minus quasi unde amet ut consectetur incidunt eos doloribus ea.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores dolor numquam aliquam excepturi recusandae. Totam tempora tenetur, voluptatum placeat reprehenderit quaerat vitae molestiae sed voluptate libero, voluptas iusto. Mollitia numquam, non a sint ad recusandae iure consectetur natus? Porro?</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src='/src/assets/emv.png' alt='EMV' />
                </div>
            </div>
        </div>
    );
}

export default Intro;

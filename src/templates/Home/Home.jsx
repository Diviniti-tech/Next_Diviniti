import styles from './style.module.scss';
import Link from 'next/link';

export default function Home() {



    return (

        <div className={styles.homeContainer}>

            <img src="assets/diviniti-logo-white.svg" alt="Diviniti logo" className={styles.homeLogo}/>

<h1>Suggestions :</h1>
<Link href="/v1">Go to V1</Link>
<Link href="/v2">Go to V2</Link>
<Link href="/v3">Go to V3</Link>
<Link href="/v4">Go to V4</Link>
<Link href="/v5">Go to V5</Link>

                    </div>
                        
                        );
    
                        }

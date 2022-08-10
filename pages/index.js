import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          dignissimos consequatur ad illum vel nesciunt fugiat possimus enim
          quaerat et molestiae dicta, suscipit accusamus veritatis iusto error
          illo quod nam.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde?
          Voluptate minus cupiditate doloremque optio voluptatem accusamus, et
          quasi incidunt aliquam, sit saepe, earum nam molestias? Culpa facilis
          architecto id.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  );
}

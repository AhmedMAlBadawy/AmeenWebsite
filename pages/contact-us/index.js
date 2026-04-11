import { useEffect, useState } from "react";

import FormButton from "./../../app/atoms/FormButton/FormButton";
import InputField from "./../../app/atoms/InputField/InputField";
import ContactButton from "./../../app/atoms/ContactButton/ContactButton";

import Grid from "./../../app/components/shared/Grid/Grid";
import Layout from "./../../app/components/shared/Layout/Layout";
import Container from "./../../app/components/shared/Container/Container";

import { data as dataEn } from "./../../app/data/pages/contact-us/data";
import { data as dataAr } from "./../../app/dataAr/pages/contact-us/data";

import styles from "./index.module.css";
import Head from "next/head";
import { useLanguage } from "../../app/contexts/LanguageContext";

const base_URL = "https://gateway.ameen.care/";
//const base_URL = "http://api.physiohome.co/api/";

const Page = () => {
  const phonePattern =
    "^(009665|9665|+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$";

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  const { language } = useLanguage();

  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  /*
  const [EmailIsValid, setEmailIsValid] = useState(false);

  const isEmailValid = () => {
    if (Email.includes("@") && Email.includes(".")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
*/
  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    //isEmailValid();
  };

  const handleMsgInput = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Name && Phone && Email && Msg /* && EmailIsValid*/) {
      fetch(`${base_URL}api/v1.0/ContactUs`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: Name,
          PhoneNumber: Phone,
          Email: Email,
          Message: Msg,
        }),
      })
        .then((response) => response.json())
        .then((data) => alert("شكرا علي التواصل, سيتم الاتصال بكم في اقرب وقت"))
        .catch((err) => alert("غير متاح الان"));

      //==========================
      setName("");
      setPhone("");
      setEmail("");
      setMsg("");
    } else {
      alert("Please Fill all fields");
    }
  };

  const contactsList = data.contacts.map((contact) => (
    <ContactButton key={contact.id} href={contact.href}>
      {contact.icon}
      {contact.title}
    </ContactButton>
  ));

  return (
    <Layout padding='130px 0 100px'>
      <Head>
        <title>تواصل معنا</title>

        <meta
          name='description'
          content='تواصل معنا.. يسعدنا التواصل معكم من خلال القنوات التالية'
        />
        <meta name='keywords' content='contact, تواصل' />
        <meta name='title' content='تواصل' />
      </Head>
      <Container>
        <Grid>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </Grid>
      </Container>

      <div className={styles.contacts}>
        <Container>
          <div className={styles.flex}>{contactsList}</div>
        </Container>
      </div>

      <Container>
        <form className={styles.form}>
          <h2>{data.form.title}</h2>

          <div className={`${styles.flex} ${styles.centeredForm}`}>
            <Grid className={styles.column}>
              <InputField
                placeholder={data.form.NameField.placeholder}
                onChange={handleNameInput}
                value={Name}
              />
              <InputField
                pattern='^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$'
                placeholder={data.form.PhoneField.placeholder}
                onChange={handlePhoneInput}
                value={Phone}
              />
              <InputField
                type='email'
                placeholder={data.form.EmailField.placeholder}
                onChange={handleEmailInput}
                value={Email}
              />
            </Grid>

            <InputField
              className={styles.column}
              type='textarea'
              placeholder={data.form.MsgField.placeholder}
              onChange={handleMsgInput}
              value={Msg}
            />
          </div>

          <FormButton
            width='250px'
            className={styles.centered}
            onClick={handleSubmit}
          >
            {data.form.button.title}
          </FormButton>
        </form>
      </Container>
    </Layout>
  );
};

export default Page;

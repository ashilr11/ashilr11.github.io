import React from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef() as any;
  const [isRobot, setIsRobot] = React.useState(true);
  const [answer, setAnswer] = React.useState(0);
  const [n1, setN1] = React.useState(Math.floor(Math.random() * 10) + 1);
  const [n2, setN2] = React.useState(Math.floor(Math.random() * 10) + 1);
  const [showSent, setShowSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  React.useEffect(() => {
    setN1(Math.floor(Math.random() * 10) + 1);
    setN2(Math.floor(Math.random() * 10) + 1);
  }, [sending]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!isRobot) {
      setSending(true);
      await emailjs.sendForm(
        "service_rrsg36n",
        "template_th7pc28",
        form.current,
        "SrZ_7DPGVY9aJr8Kd"
      );
      setSending(false);
      setIsRobot(true);
      form.current.reset();
      setShowSent(true);
      setInterval(() => {
        setShowSent(false);
      }, 3000);
    }
  };
  return (
    <section id="contact" className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>Contact Me</h3>

        <div className={styles.info}>
          <div className={styles.leftColumn}>
            <a
              className={styles.links}
              href="https://www.linkedin.com/in/ashil-ramjee"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              className={styles.links}
              href="https://github.com/ashilramjee"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a className={styles.links} href="mailto:ashilr11@gmail.com">
              Email Me
            </a>
          </div>
          <div className={styles.rightColumn}>
            <form ref={form} onSubmit={onSubmit}>
              {!showSent ? (
                <>
                  <div className={styles.formItem}>
                    <label>Name *</label>
                    <input type="text" name="name" required={true} />
                  </div>
                  <div className={styles.formItem}>
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required={true}
                      autoComplete="email"
                    />
                  </div>
                  <div className={styles.formItem}>
                    <label>Message *</label>
                    <textarea name="message" required={true} maxLength={256} />
                  </div>

                  {isRobot && (
                    <div className={styles.robotRow}>
                      <label>
                        Are you a robot? What's {n1} + {n2} ?
                      </label>
                      <input
                        type="number"
                        name="robotNum"
                        value={answer}
                        required={true}
                        maxLength={50}
                        onChange={(e: any) => {
                          setAnswer(e.target.value);
                          if (parseInt(e.target.value) === n1 + n2) {
                            setIsRobot(false);
                          } else {
                            setIsRobot(true);
                          }
                        }}
                      />
                    </div>
                  )}

                  {!isRobot && (
                    <div className={styles.submitRow}>
                      <label>Congrats you're human!</label>
                      <input
                        className={styles.submit}
                        type="submit"
                        disabled={sending ? true : false}
                        value={sending ? "Sending" : "Send"}
                      />
                    </div>
                  )}
                </>
              ) : (
                <p>I'll reply as soon as possible :D</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

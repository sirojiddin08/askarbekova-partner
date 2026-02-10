"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Team.module.css";

const teamMembers = [
    {
        id: 1,
        nameKey: "team.member1",
        image: "/team/nilufar.webp",
    },
    {
        id: 2,
        nameKey: "team.member2",
        image: "/team/murod.webp",
    },
    {
        id: 3,
        nameKey: "team.member3",
        image: "/team/zebo.webp",
    },
];

export default function Team() {
    const { t } = useLanguage();

    return (
        <section id="team" className={`section ${styles.team}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">{t("team.title")}</h2>
                    <div className="gold-divider" />
                    <p className={styles.teamDescription}>{t("team.description")}</p>
                </motion.div>

                <div className={styles.grid}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={`${t(member.nameKey)} — ${t("team.role")}, advokat Askarbekova Partner Toshkent`}
                                    className={styles.image}
                                    width={400}
                                    height={500}
                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className={styles.overlay} />
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{t(member.nameKey)}</h3>
                                    <p className={styles.role}>{t("team.role")}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

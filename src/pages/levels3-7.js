import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const Levels3_7Info = () => {
    return (
        <Layout title='Levels 3-7 Explained'>
            <div className={styles.detail_general_wrapper}>
                <div style={{ width: "73%" }}>
                    <h2 style={{ marginBottom: 80, fontSize: "2rem", color: "#191970" }}>
                        Levels 3-7 Explained
                    </h2>
                    <div className={styles.inner_container}>
                        <h3> Level 3</h3>
                        <span className={styles.content} style={{ lineHeight: 1.6 }}>
                            The Level 3 Course is a 120 credit course, which is equivalent to 2 A
                            levels. The course is made up of 6 modules and 6 written assignments.
                            This course provides entry onto the first year of Undergraduate Degree
                            course, or a Level 4 course.
                        </span>
                        <h3> Level 4</h3>
                        <span className={styles.content} style={{ lineHeight: 1.6 }}>
                            Level 4 is the equivalent to the first year of a Bachelor’s Degree
                            programme. The Level 4 course is made up of 10 modules and 8 assignments,
                            which are equivalent to 120 university credits.
                        </span>
                        <h3> Level 5</h3>
                        <span className={styles.content} style={{ lineHeight: 1.6 }}>
                            Level 5 is the equivalent to the second year of a Bachelor’s Degree
                            programme. It is also equivalent to a HND diploma. The Level 5 course
                            also has 10 modules and 8 assignments, which also provide the student
                            with 120 university credits upon completion.
                        </span>
                        <h3> Level 6</h3>
                        <span className={styles.content} style={{ lineHeight: 1.6 }}>
                            Upon completion of a Level 6 course, you will be eligible for admission
                            onto a Postgraduate Business programme, including an MBA course. The
                            level 6 course is made up of 10 modules and 6 written assignments.
                        </span>
                        <h3> Level 7</h3>
                        <span className={styles.content} style={{ lineHeight: 1.6 }}>
                            The Level 7 course carries 120 credits which gives entry onto the MBA Top
                            Up (one module or one module + dissertation) , this can be completed by
                            studying either online or on campus at a recognised UK or overseas
                            university. our level 7 is made up of 30 modules and 8 written
                            assignments. For an official breakdown of what each level means, please
                            visit
                            <a href="https://www.gov.uk/what-different-qualification-levels-mean/compare-different-qualification-levels">https://www.gov.uk/what-different-qualification-levels-mean/compare-different-qualification-levels</a>
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Levels3_7Info;

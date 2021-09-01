import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/faq.module.css";
import { Link } from "gatsby";

const Faq = () => {
  const enableAnswer = (e) => {
    if (
      e.target.parentElement.children[1].style.height == "0px" ||
      e.target.parentElement.children[1].style.height == "" // for some reasons it does not get the value at the first render
    ) {
      const subTexts = document.querySelectorAll(
        "." + styles.inner_container + " span"
      );
      for (let i = 0; i < subTexts.length; i++) {
        if (subTexts[i] != e.target.parentElement.children[1]) {
          subTexts[i].style.height = "0px";
        }
      }
      e.target.parentElement.children[1].style.height = "200px";
    } else {
      e.target.parentElement.children[1].style.height = "0px";
    }
  };

  React.useEffect(() => {
    const allHeaders = document.querySelectorAll(
      "." + styles.inner_container + " div h3"
    );
    for (var i = 0; i < allHeaders.length; i++) {
      allHeaders[i].addEventListener("click", enableAnswer);
    }
  }, []);
  return (
    <Layout title="Entry Requirements">
      <div className={styles.detail_general_wrapper}>
        <h2 className={styles.header_title}>FAQ</h2>
        <div className={styles.inner_container}>
          <h2> - Application - </h2>

          <div>
            {" "}
            <h3> Are there any English language requirements? </h3>
            <span>
              For students who do not live or come from an English language
              speaking country, then we recommend taking an IELTS course to
              improve your language to level 5.5 or higher. This can be done
              alongside our courses. Your minimum level of English may vary
              depending upon which university you decide to complete your top up
              qualification from.
            </span>
          </div>
          <div>
            <h3> Do I need any previous experience and qualifications? </h3>
            <span>
              You will need to have an IELTS score of Level 5.5 or above on
              completion of the OBS course. You can study an English course
              alongside the OBS course. At Level 4/5, you will require a full
              secondary education to be eligible to enrol onto the course, and
              universities will require a minimum age before embarking on the
              university top-up programme. At Level 7, you will require 5 years
              of managerial experience if you do not have a BA degree. This may
              vary for various University partners. However, we will look at
              every application individually and some exceptions may be made.
            </span>
          </div>
          <div>
            <h3> Will there be an interview?</h3>
            <span>
              There is no interview process. You will have to fill out a short
              application form to make sure you meet the criteria.
            </span>
          </div>
          <div>
            <h3>How do I choose the best course for me?</h3>
            <span>
              Learners should first visit the{" "}
              <Link to="/">Richmond College Course page </Link>
              to view the range of courses on offer. It’s important you choose a
              subject you enjoy and will help you reach your goals. Here are
              some things to consider when choosing the right subject for you:
              Review the modules within the course: Do they interest you? Are
              they relevant to your chosen career path? How is the course taught
              and assessed: Do you have the motivation to study via distance
              learning? Are you able to work independently? It is important that
              learners do not try to extend themselves too far and too quickly,
              so should ideally choose a path that comfortably moves on from
              their existing level of skills and experience.
            </span>
          </div>
          <div>
            <h3> How do I apply for a course?</h3>
            <span>
              You will be eligible to study the Level 7 courses if you are a
              Graduate in any discipline and are aged 23 years or over.
              Non-graduates aged over 24 years with at least 5 years experience
              in management may also apply.
            </span>
          </div>
        </div>{" "}
        <div className={styles.inner_container}>
          <h2> - Assignments - </h2>
          <div>
            <h3> Do I have to pay for my assignments?</h3>
            <span>All assignment submissions are free of charge.</span>
          </div>
          <div>
            <h3> Do I receive help and guidance while writing assignments?</h3>
            <span>
              Yes – all students are encouraged to arrange an initial 30 minute
              ‘assignment preparation’ session with one of our tutors. The
              session will be conducted via Zoom and cover all aspects of
              assignment writing, particularly key areas that students need to
              be aware of.
              <br />
              <br />
              In addition to this, students have access to tutors who work with
              Online Business School. The tutor details are available via the
              Dashboard and will show which areas they specialise in and when
              they are available. If a student wishes to arrange a session, they
              can do so directly from the Dashboard, specify which topic they
              need assistance with, or contact our support team at
              studentsupport@onlinebusinessschool.com. Further information is
              available in the Student Handbook and the relevant course
              information packs.
            </span>
          </div>
          <div>
            <h3> How do I submit my assignments?</h3>
            <span>
              Submissions need to be uploaded to via the dashboard, in the
              ‘Assignments’ area. Students must also provide a plagiarism report
              for all submitted assignments
            </span>
          </div>
          <div>
            <h3>How many words do I have to write for my assignments?</h3>
            <span>
              We recommend students write between 5000 – 8000 words for each
              assignment. You will not be penalised for going over this word
              count limit as long as the work is related to the assignment
              question.
            </span>
          </div>
          <div>
            <h3>When do I receive the assignments?</h3>
            <span>Assignments are released to students upon enrolment.</span>
          </div>
          <div>
            <h3>How long does the marking process take?</h3>
            <span>
              After an assignment has been submitted, our markers will return
              the results within 10 working days. Once all assignments have been
              completed and marked, an Internal Verifier will view the work,
              which usually takes up to 10 working days. After the Internal
              Verification has come back and agrees with the initial marking,
              all of the assignments are sent to ATHE for External Verification.
              ATHE will then check all of the work to ensure it is of the
              correct standard. This process can take up to 30 working days. In
              total, once you have completed all assignments and had them
              marked, it can take up to 40 working days to receive your final
              result.
            </span>
          </div>
        </div>
        <div className={styles.inner_container}>
          <h2> - Costs - </h2>
          <div>
            <h3>Is the online payment taken immediately?</h3>
            <span>
              Yes. Once Richmond College has received the cleared funds your
              course material will be released to you immediately.
            </span>
          </div>
          <div>
            <h3> Is there any financial assistance available?</h3>
            <span>
              OBS offers an interest free payment plan so that you can pay for
              your course over a set number of months. Contact one of our
              student advisers for more information about this. UK students may
              also be eligible for student loans for the university top-up
              programme. Learners should make enquiries directly to their chosen
              university.
            </span>
          </div>
          <div>
            <h3> Are there likely to be any additional costs?</h3>
            <span>
              No additional costs are levied by OBS, and all additional learning
              resources including tutor support, e-books, games and short
              business courses, are included in course tuition fees. For more
              information relating to tutor support click here.
            </span>
          </div>
          <div>
            <h3>What payment options are available?</h3>
            <span>
              Payment can be made online through Sage Pay by credit/debit card,
              bank transfer or PayPal through any of our international banks.
            </span>
          </div>
          <div>
            <h3>How much do assessments cost?</h3>
            <span>Assessments are included with the course purchases.</span>
          </div>
        </div>
        <div className={styles.inner_container}>
          <h2> - Credibility - </h2>
          <div>
            <h3>Who are ATHE?</h3>
            <span>
              ATHE provides colleges with qualifications in management,
              business, tourism and health & social care, ATHE have made a name
              for themselves with good customer service, rewarding
              qualifications and happy learners with progression routes to
              university degrees. ATHE provide bespoke training support, great
              value for money, comprehensive university progressions, dedicated
              support from an ATHE officer, simple easy to use documents and
              website, innovative qualifications, External Verifier support,
              flexible delivery solutions, a global focus and a close business
              development relationship. Please visit athe.co.uk for more
              information
            </span>
          </div>
          <div>
            <h3> How are Universities linked to the modules?</h3>
            <span>
              Learners who achieve an OBS qualification are automatically mapped
              against a standard UK Higher Education qualification framework.
              This is a universally recognised framework of credits.
              Universities can therefore award credits against the OBS study to
              give exemptions from large parts of their formal programmes. OBS
              and ATHE have pre agreed arrangements with certain universities to
              provide credits against programmes either on campus or off campus.
              This is termed ‘university top-up’.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Faq;

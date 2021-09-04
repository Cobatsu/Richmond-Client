import React from "react";
import * as styles from "../../styles/pages/course_detail.module.css";
import Layout from "../components/layoutelements/layout";
import Img from "gatsby-image"

const CourseDetail = ({pageContext}) => {
    const {node} = pageContext;
    const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Layout title={
            node.frontmatter.courseName
        }>
            <div className={
                styles.detail_general_wrapper
            }>
                <h2 className={
                    styles.header_title
                }>
                    {
                    node.frontmatter.courseName
                }</h2>

                <Img style={{width:"82.6%",height:"400px",zIndex:-10,margin:30}} fluid={featuredImgFluid}></Img>

                <div className={
                    styles.inner_container
                }>
                    <h2>
                        - About the course -
                    </h2>
                    <div dangerouslySetInnerHTML={
                        {__html: node.html}
                    }/>
                </div>

                <div className={
                    styles.inner_container
                }>
                    <h2>
                        - Course Details -
                    </h2>
                    {" "}
                    <div dangerouslySetInnerHTML={
                        {__html: node.frontmatter.courseDetails}
                    }/>
                </div>
            </div>
        </Layout>
    );
};


export default CourseDetail;

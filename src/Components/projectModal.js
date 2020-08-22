import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Flex } from "./Flex";
export default class ProjectModal extends React.Component {
  state = {
    open: false,
    project: {},
    dataArr: [],
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.project !== this.props.project) {
  //       this.setState({ project: nextProps.selected });
  //       this.selectNew();
  //     }
  //   }

  componentDidMount = () => {
    this.setState({
      project: this.props.project,
      dataArr: [...this.props.project.content.list],
    });
  };
  render() {
    const { open, project } = this.state;
    const projectImage = "images/portfolio/" + project.image;
    // const dataArr = [...project.content.list];
    const arr = [1, 2, 3];
    return (
      <div>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div onClick={this.onOpenModal} style={{ cursor: "pointer" }}>
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              {/* <div className="link-icon">
                <i className="fa fa-link"></i>
              </div> */}
            </div>
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>{project.title}</h2>
          {arr.map((item) => (
            // <span>&bull;</span>
            <div>
              <Flex
                key={Math.random()}
                container
                style={{ flexDirection: "row" }}
              >
                {/* <div style={{ flexDirection: "row" }}> */}
                <div style={{ display: "flex" }}>
                  <span style={{ paddingRight: 5 }}> &bull; </span>
                </div>
                <div style={{ display: "flex" }}>
                  <span> {item}</span>
                </div>
                {/* </div> */}
              </Flex>
            </div>
            // <div key={Math.random()}>
            //   {/* <p style={{ paddingRight: 5 }}> &bull; </p> */}

            // </div>
          ))}
          {project.content ? (
            <div>
              <p>{project.content.description}</p>
              {/* <ul style={{ marginLeft: "5%" }}> */}
              {project.content.list ? "true" : "false"}
              {project.content.list ? typeof arr : "false"}

              {/* </ul> */}

              {project.url ? (
                <div
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <a
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                    }}
                    href={project.url}
                    target="_blank"
                  >
                    Click here to check the project
                  </a>
                </div>
              ) : null}
              <br />

              {project.content.video ? (
                <div>
                  <iframe
                    title={project.content.video}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    width="100%"
                    height={window.innerHeight / 2}
                    src={project.content.video}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    autoplay
                  ></iframe>
                </div>
              ) : null}
              {project.content.images ? (
                <Carousel showArrows={true}>
                  {project.content.images.map((imageUrl) => (
                    <div key={Math.random()}>
                      <img src={imageUrl} />
                    </div>
                  ))}
                </Carousel>
              ) : null}
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }
}

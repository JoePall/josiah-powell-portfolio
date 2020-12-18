import React from "react";
import { Container, Card } from "react-bootstrap";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";

function AdditionalProjects() {
  return (
    <Container fluid className="main transition-item">
      <h4 className="transition-item">Additional Projects</h4>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>Kansas University</h4>
              <h5>Full Stack Certification | 5/2020 - 11/2020</h5>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>UC Berkeley Extension</h4>
              <h5>Computers and Programming | 2019 - Present</h5>
              <Card className="p-3 bg-light">
                IN PROGRESS Fundamentals of Web
                <Divider className="my-2" variant="fullWidth" />
                Development Python Programming
                <Divider className="my-2" variant="fullWidth" />
                Introduction to C Language
                <Divider className="my-2" variant="fullWidth" />
                Programming Introduction to Computers and Programming
              </Card>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="tertiary">
              <BusinessCenterRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>OLCC</h4>
              <h5>Office Associate | 2014 - Present</h5>
              <Card className="p-3 bg-light">Not Applicable</Card>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <BusinessCenterRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>Independent Developer</h4>
              <h5>Software Developer | 2013 - 2014</h5>
              <Card className="p-3 bg-light">
                <b>Successfully Developed and Deployed a Cross Country Application</b>
                <i>Asynchronous timing of Multiple Athletes</i>
                <i>Ability to track split times of Multiple Athletes during the Race</i>
                <Divider className="my-2" variant="fullWidth" />
                <b>Successfully Developed and Deployed a Bible Application</b>
                <i>Set Lock Screen Background</i>
                <i>Read Aloud</i>
              </Card>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <BusinessCenterRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>Heartland Crop Insurance</h4>
              <h5>Software Developer | 2012 - 2013</h5>
              <Card className="p-3 bg-light">
                Successfully Optimized HQL Queries
                <Divider className="my-2" variant="fullWidth" />
                Introduction to C Language
                <Divider className="my-2" variant="fullWidth" />
                Programming Introduction to Computers and Programming
              </Card>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <BusinessCenterRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="p-3">
              <h4>Kalos inc</h4>
              <h5>Software Developer | 2011 - 2012</h5>
              <Card className="p-3 bg-light">
                Helped in Unit Test Development
                <Divider className="my-2" variant="fullWidth" />
                Successfully Built Code Review System
              </Card>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default AdditionalProjects;

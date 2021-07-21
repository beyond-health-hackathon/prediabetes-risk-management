import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";

const Track = () => {
  return (
    <>
      <div className="bg-gradient-info pb-8 pt-5"></div>
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardBody>
                <Row>
                  <Col>
                    <Card>
                      <CardHeader>
                        <h3>Manual Track</h3>
                      </CardHeader>
                      <CardBody>
                        <Row>Insert pic</Row>
                        {/*TODO: insert pic*/}
                        <Row className="mt-3">
                          <Button
                            className="mx-auto"
                            color="primary"
                            type="button"
                          >
                            Add input
                          </Button>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <CardHeader>
                        <h3>Scan QR Code</h3>
                      </CardHeader>
                      <CardBody>
                        <Row>Insert pic</Row>
                        {/*TODO: insert pic*/}
                        <Row className="mt-3">
                          <Button
                            className="mx-auto"
                            color="primary"
                            type="button"
                          >
                            Get QR
                          </Button>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Track;

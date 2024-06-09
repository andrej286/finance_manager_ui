import React, {useEffect, useState} from 'react';
import {GoalsPieChart} from "./charts/goals-pie-chart";
import {GoalsTable} from "./goals-table";
import AddGoalForm from "./add-goal-form";
import {fetchGoals} from "../../api/http-utils/goals";
import {GoalsScatterChart} from "./charts/goals-scatter-chart";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetGoals = async () => {
    const data = await fetchGoals();
    setGoals(data);
  };

  useEffect(() => {
    fetchAndSetGoals();
  }, []);

  return (
    <>
      <h1>{t("section.goal.title")}</h1>
      <Container className="mt-2">
        <Row>
          <Col>
            <GoalsPieChart goals={goals}/>
          </Col>
          <Col>
            <GoalsScatterChart goals={goals}/>
          </Col>
        </Row>
      </Container>
      <AddGoalForm onSuccess={fetchAndSetGoals}/>
      <GoalsTable goals={goals} onSuccess={fetchAndSetGoals}/>
    </>
  );
};

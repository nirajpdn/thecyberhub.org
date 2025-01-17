import React from "react";

import { useParams } from "react-router-dom";
import RoadmapsData from "./RoadmapsData";
import { encodeURL } from "../Blogs/util";
import {
    Roadmaps,
    RelatedRoadmaps,
    RoadmapContainer,
    RoadmapsHeading,
    RoadmapsDesc,
    RoadmapInlineCard,
    AllRoadmaps,
    Container,
    RouterLink,
    RedirectLink,
    RoadmapSectionHeading,
    RoadmapDetails,
    RoadmapDetailsCard,
    RoadmapContentHeading,
    RoadmapDetailsContainer,
} from "./RoadmapElements";

const Roadmap = () => {
    const { title } = useParams();
    const SelectedRoadmap = RoadmapsData.find(
        (roadmap) => encodeURL(roadmap.title).toLowerCase() === title.toLowerCase(),
    );

    return (
        <RoadmapContainer>
            <h1>{SelectedRoadmap.title}</h1>
            {/* <p>{SelectedRoadmap.desc}</p> */}
            {/* <p>{SelectedRoadmap.details.section}</p> */}

            <RoadmapDetailsContainer>
                {SelectedRoadmap.details.map((resources, id) => {
                    return (
                        <RoadmapDetails key={id}>
                            <RoadmapSectionHeading>{resources.section}</RoadmapSectionHeading>
                            {resources.resources.map((resource, id) => {
                                return (
                                    <RedirectLink key={id} href={resource.url} target={"_blank"}>
                                        <RoadmapDetailsCard>
                                            <RoadmapContentHeading>{resource.title}</RoadmapContentHeading>
                                        </RoadmapDetailsCard>
                                    </RedirectLink>
                                );
                            })}
                        </RoadmapDetails>
                    );
                })}
            </RoadmapDetailsContainer>

            <hr style={{ width: "65em" }} />

            <Roadmaps>
                <Container>
                    <RelatedRoadmaps>Related Roadmaps</RelatedRoadmaps>
                    <RouterLink to={"/learn/roadmaps"}>
                        <AllRoadmaps>All Roadmaps</AllRoadmaps>
                    </RouterLink>
                </Container>
                {RoadmapsData.map((roadmap, id) => {
                    return (
                        <RouterLink key={id} to={{ pathname: `../` + `${encodeURL(roadmap.title)}` }}>
                            <RoadmapInlineCard key={id}>
                                <RoadmapsHeading>{roadmap.title} </RoadmapsHeading>
                                <RoadmapsDesc>{roadmap.desc} </RoadmapsDesc>
                            </RoadmapInlineCard>
                        </RouterLink>
                    );
                })}
            </Roadmaps>
        </RoadmapContainer>
    );
};

export default Roadmap;

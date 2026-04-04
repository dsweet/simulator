import { Curriculum } from '../../types';
import { uwHcde } from './uw-hcde';
import { uwHcdeLite } from './uw-hcde-lite';
import { uwExploreComplit } from './uw-explore-complit';
import { uwExplorePolisci } from './uw-explore-polisci';
import { uwExploreCogsci } from './uw-explore-cogsci';
import { uwEcon } from './uw-econ';
import { uwEconBs } from './uw-econ-bs';
import { uwPoliecon } from './uw-poliecon';
import { upsEcon } from './ups-econ';
import { richmondPpel } from './richmond-ppel';
import { rochesterPpe } from './rochester-ppe';
import { ucsdEcon } from './ucsd-econ';
import { uclaEcon } from './ucla-econ';
import { uwMeArt } from './uw-me-art';

const curricula: Record<string, Curriculum> = {
  'uw-hcde-lite': uwHcdeLite,
  'uw-explore-complit': uwExploreComplit,
  'uw-explore-polisci': uwExplorePolisci,
  'uw-explore-cogsci': uwExploreCogsci,
  'uw-me-art': uwMeArt,
  'uw-econ-bs': uwEconBs,
  uw: uwHcde,
  'uw-econ': uwEcon,
  'uw-poliecon': uwPoliecon,
  ups: upsEcon,
  richmond: richmondPpel,
  rochester: rochesterPpe,
  ucsd: ucsdEcon,
  ucla: uclaEcon,
};

export function getCurriculum(schoolId: string): Curriculum | undefined {
  return curricula[schoolId];
}

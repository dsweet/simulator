import { Curriculum } from '../../types';
import { uwHcde } from './uw-hcde';
import { upsEcon } from './ups-econ';
import { richmondPpel } from './richmond-ppel';
import { rochesterPpe } from './rochester-ppe';
import { ucsdEcon } from './ucsd-econ';
import { uclaEcon } from './ucla-econ';

const curricula: Record<string, Curriculum> = {
  uw: uwHcde,
  ups: upsEcon,
  richmond: richmondPpel,
  rochester: rochesterPpe,
  ucsd: ucsdEcon,
  ucla: uclaEcon,
};

export function getCurriculum(schoolId: string): Curriculum | undefined {
  return curricula[schoolId];
}

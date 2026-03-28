import { Curriculum } from '../../types';
import { uwHcde } from './uw-hcde';
import { upsEcon } from './ups-econ';
import { richmondEcon } from './richmond-econ';
import { rochesterEcon } from './rochester-econ';
import { ucsdEcon } from './ucsd-econ';
import { uclaEcon } from './ucla-econ';

const curricula: Record<string, Curriculum> = {
  uw: uwHcde,
  ups: upsEcon,
  richmond: richmondEcon,
  rochester: rochesterEcon,
  ucsd: ucsdEcon,
  ucla: uclaEcon,
};

export function getCurriculum(schoolId: string): Curriculum | undefined {
  return curricula[schoolId];
}

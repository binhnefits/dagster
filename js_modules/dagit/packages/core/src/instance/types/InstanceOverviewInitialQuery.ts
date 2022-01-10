/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RepositoryLocationLoadStatus, RunStatus, InstigationStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: InstanceOverviewInitialQuery
// ====================================================

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_displayMetadata {
  __typename: "RepositoryMetadata";
  key: string;
  value: string;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_RunStatsSnapshot {
  __typename: "RunStatsSnapshot";
  id: string;
  enqueuedTime: number | null;
  launchTime: number | null;
  startTime: number | null;
  endTime: number | null;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_PythonError_cause | null;
}

export type InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats = InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_RunStatsSnapshot | InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats_PythonError;

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs {
  __typename: "Run";
  id: string;
  mode: string;
  runId: string;
  status: RunStatus;
  stats: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs_stats;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_scheduleState {
  __typename: "InstigationState";
  id: string;
  status: InstigationStatus;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_futureTicks_results {
  __typename: "FutureInstigationTick";
  timestamp: number;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_futureTicks {
  __typename: "FutureInstigationTicks";
  results: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_futureTicks_results[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules {
  __typename: "Schedule";
  id: string;
  mode: string;
  name: string;
  cronSchedule: string;
  scheduleState: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_scheduleState;
  executionTimezone: string | null;
  futureTicks: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules_futureTicks;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors_targets {
  __typename: "Target";
  pipelineName: string;
  mode: string;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors_sensorState {
  __typename: "InstigationState";
  id: string;
  status: InstigationStatus;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors {
  __typename: "Sensor";
  id: string;
  targets: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors_targets[] | null;
  jobOriginId: string;
  name: string;
  sensorState: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors_sensorState;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_modes {
  __typename: "Mode";
  id: string;
  name: string;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines {
  __typename: "Pipeline";
  id: string;
  name: string;
  isJob: boolean;
  runs: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_runs[];
  schedules: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_schedules[];
  sensors: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_sensors[];
  modes: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines_modes[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_displayMetadata {
  __typename: "RepositoryMetadata";
  key: string;
  value: string;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories {
  __typename: "Repository";
  id: string;
  name: string;
  pipelines: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_pipelines[];
  location: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_location;
  displayMetadata: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories_displayMetadata[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
  repositories: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation_repositories[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_PythonError_cause | null;
}

export type InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError = InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_RepositoryLocation | InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError_PythonError;

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries {
  __typename: "WorkspaceLocationEntry";
  id: string;
  name: string;
  loadStatus: RepositoryLocationLoadStatus;
  displayMetadata: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_displayMetadata[];
  locationOrLoadError: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries_locationOrLoadError | null;
}

export interface InstanceOverviewInitialQuery_workspaceOrError_Workspace {
  __typename: "Workspace";
  locationEntries: InstanceOverviewInitialQuery_workspaceOrError_Workspace_locationEntries[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface InstanceOverviewInitialQuery_workspaceOrError_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: InstanceOverviewInitialQuery_workspaceOrError_PythonError_cause | null;
}

export type InstanceOverviewInitialQuery_workspaceOrError = InstanceOverviewInitialQuery_workspaceOrError_Workspace | InstanceOverviewInitialQuery_workspaceOrError_PythonError;

export interface InstanceOverviewInitialQuery {
  workspaceOrError: InstanceOverviewInitialQuery_workspaceOrError;
}
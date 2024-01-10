import $ from "dax";
import {
  taskError,
  taskOk,
  TaskResult,
} from "../services/task-runner.service.ts";

export async function cloneRepository(
  url: string,
  cwd: string,
  destinationFolder = ""
): Promise<TaskResult> {
  try {
    // TODO: Check if directory exist (Add warning if already exist and not up to date)

    await $`git clone ${url} ${destinationFolder}`
      .cwd(cwd || Deno.cwd())
      .quiet();

    return taskOk;
  } catch (error: unknown) {
    return taskError(`${error}`);
  }
}

import { useState, useEffect } from "react"
import { firebase } from "../firebase"
import { collatedTasksExist } from "../helpers/index"
import moment from "moment"

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // GET tasks
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "22796")

    // GET task for selected project
    // if selectedProject and it does not exists in collated Tasks
    // set unsubscribe equal to project == selectedProject
    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "== ", selectedProject))
        : selectedProject == "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe
  }, [selectedProject])
}

import React, { useState, useEffect } from "react";
import * as client from "./client";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css"

export default function Modules() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
    };
  
    const fetchModules = async () => {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    useEffect(() => {
      fetchModules();
    }, []);

    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };  
  
    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
  
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);

    return (        
      <div id="wd-modules">
        <div className="pb-5">
          <ModulesControls setModuleName={setModuleName} moduleName={moduleName} 
            addModule={() => {
              createModule({ name: moduleName, course: cid });
              setModuleName("");
            }}/>
        </div>
        <div>
          <ul id="wd-modules" className="list-group flex-fill rounded-0 pt-4">
            {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2">
                  <BsGripVertical className="me-2 fs-3"/>
                  {!module.editing && module.name}
                  { module.editing && (
                    <input className="form-control w-50 d-inline-block"
                      onChange={(e) => saveModule({ ...module, name: e.target.value}) }
                      onKeyDown={(e) => {
                          if (e.key === "Enter") {
                              saveModule({ ...module, editing: false});
                          }
                    }}
                    value={module.name}/>
                  )}
                  <ModuleControlButtons moduleId={module._id} 
                    deleteModule={(moduleId) => {removeModule(moduleId);}} 
                    editModule={(moduleId) => dispatch(editModule(moduleId))}/>
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lessons: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1 border-green">
                      <BsGripVertical className="me-2 fs-3"/>                  
                      {lessons.name}
                      <LessonControlButtons />
                    </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
  
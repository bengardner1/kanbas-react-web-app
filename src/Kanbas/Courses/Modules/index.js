import ModuleList from "./ModuleList";

function Modules() {
  return (
    <div>
      <div className="float-end mt-4 pb-3">
            <button type="button" class="btn kb-button-grey">Collapse</button>
            <button type="button" class="btn kb-button-grey">View Progress</button>
            <button class="btn btn-secondary dropdown-toggle kb-small-right-margin " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Publish All
              </button>
            <button type="button" class="btn btn-danger">+ Module</button>
            </div>
            <div className="clearfix"></div>
            <hr className="mt-1 mb-4"/>
      <ModuleList />
    </div>
  );
}
export default Modules
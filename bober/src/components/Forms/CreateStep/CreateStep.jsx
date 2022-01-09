import "./CreateStep.css";
import React, { useState } from "react";
import Formik from "formik";

const CreateStep = () => {
  const [createOpen, setCreateOpen] = useState(true);
  const initialValues = {
    EventName: "",
    EventDescription: "",
    EventOwner: ""

  };
  function openModal() {
    setCreateOpen(true);
  }
  function closeModal() {
    setCreateOpen(false);
  }

  return (
    <Formik
      initalValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit }) => {
        <div
          class="box"
          style={createOpen ? { display: "flex" } : { display: "none" }}
        >
          <div
            class={createOpen ? "active modal-container" : "modal-container"}
          >
            <div class="modal">
              <div class="form-wrap">
                <div class="hit-the-floor">Создать Итап!</div>

                <form class="form" id="formAlt" onSubmit={handleSubmit}>
                  <div class="control"></div>
                  <label for="EventName">Имя Итапа</label>

                  <div class="control block-cube block-input">
                    <input
                      placeholder=""
                      type="text"
                      name="EventName"
                      value={values.EventName}
                      onChange={handleChange}
                      required
                    />
                    <div class="bg-top">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                      <div class="bg-inner"></div>
                    </div>
                  </div>
                  <label for="REFI_name">Описание Итапа</label>
                  <div class="control block-cube block-input">
                    <input
                      placeholder="Описание Итапа"
                      type="text"
                      name="EventDescription"
                      value={values.EventDescription}
                      onChange={handleChange}
                    />
                    <div class="bg-top">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                      <div class="bg-inner"></div>
                    </div>
                  </div>
                  <label for="REFI_name">Должная Роль</label>
                  <div class="control block-cube block-input">
                    <input
                      placeholder="Должная Роль"
                      type="text"
                      name="EventOwner"
                      value={values.EventOwner}
                      onChange={handleChange}
                    />
                    <div class="bg-top">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                      <div class="bg-inner"></div>
                    </div>
                  </div>

                  <button
                    class="btn block-cube block-cube-hover"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    <div class="bg-top">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                      <div class="bg-inner"></div>
                    </div>
                    <div class="text">Отправить</div>
                  </button>
                  <div class="credits"></div>
                </form>
              </div>

              <a
                class="link-2"
                onClick={() => setCreateOpen((prev) => !prev)}
              ></a>
            </div>
          </div>
        </div>;
      }}
    </Formik>
  );
};

export default CreateStep;

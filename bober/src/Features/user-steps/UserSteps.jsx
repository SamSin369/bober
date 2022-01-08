import React from "react";
import { Button } from "semantic-ui-react";
import "./usersteps.css";
const UserSteps = () => {
  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div id="userTable">
      <h1>Этапы Участие разделены на должности</h1>

      <main class="st_viewport">
        <div class="st_wrap_table" data-table_id="0">
          <header class="st_table_header">
            <h2>Бугалтер</h2>

            <Button positive inverted content="Добавить Новый Итап" icon="plus" id="addStepBtn"/>

            <div class="st_row">
              <div class="st_column _rank">Номер</div>
              <div class="st_column _name">Name</div>
              <div class="st_column _surname">Surname</div>
              <div class="st_column _year">Year</div>
              <div class="st_column _section">Управление</div>
            </div>
          </header>
          <div class="st_table">
            <div class="st_row">
              <div class="st_column _rank">1</div>
              <div class="st_column _name">signal</div>
              <div class="st_column _surname"></div>
              <div class="st_column _year">1973</div>
              <div class="st_column _section">
                {" "}
                <Button
                  onClick={() => handleDelete()}
                  color="red"
                  icon="trash"
                />
                <Button onClick={() => handleEdit()} color="grey" icon="edit" />
                <Button color='brown' icon="arrow right"></Button>
              </div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Max</div>
              <div class="st_column _surname">Luke</div>
              <div class="st_column _year">1971</div>
              <div class="st_column _section">USA</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Kunze</div>
              <div class="st_column _year">2015</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Janina</div>
              <div class="st_column _surname">Endres</div>
              <div class="st_column _year">1955</div>
              <div class="st_column _section">Belgium</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Lena</div>
              <div class="st_column _surname">Eifel</div>
              <div class="st_column _year">1996</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Nacht</div>
              <div class="st_column _year">1968</div>
              <div class="st_column _section">Swiss</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Vanessa</div>
              <div class="st_column _surname">Schneider</div>
              <div class="st_column _year">2004</div>
              <div class="st_column _section">Russia</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">laura</div>
              <div class="st_column _surname">Beike</div>
              <div class="st_column _year">1952</div>
              <div class="st_column _section">Sweden</div>
            </div>
          </div>
        </div>
        <div class="st_wrap_table" data-table_id="1">
          <header class="st_table_header">
            <h2>Дядя</h2>
            <Button positive inverted content="Добавить Новый Итап" icon="plus" id="addStepBtn"/>
            <div class="st_row">
              <div class="st_column _rank">Rank</div>
              <div class="st_column _name">Name</div>
              <div class="st_column _surname">Surname</div>
              <div class="st_column _year">Year</div>
              <div class="st_column _section">Section</div>
            </div>
          </header>
          <div class="st_table">
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Kunze</div>
              <div class="st_column _year">2015</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Janina</div>
              <div class="st_column _surname">Endres</div>
              <div class="st_column _year">1955</div>
              <div class="st_column _section">Belgium</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Lena</div>
              <div class="st_column _surname">Eifel</div>
              <div class="st_column _year">1996</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">John</div>
              <div class="st_column _surname">Doe</div>
              <div class="st_column _year">1973</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Max</div>
              <div class="st_column _surname">Luke</div>
              <div class="st_column _year">1971</div>
              <div class="st_column _section">USA</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Nacht</div>
              <div class="st_column _year">1968</div>
              <div class="st_column _section">Swiss</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Vanessa</div>
              <div class="st_column _surname">Schneider</div>
              <div class="st_column _year">2004</div>
              <div class="st_column _section">Russia</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">laura</div>
              <div class="st_column _surname">Beike</div>
              <div class="st_column _year">1952</div>
              <div class="st_column _section">Sweden</div>
            </div>
          </div>
        </div>
        <div class="st_wrap_table" data-table_id="2">
          <header class="st_table_header">
            <h2>Isn't that nice</h2>
            <Button positive inverted content="Добавить Новый Итап" icon="plus" id="addStepBtn"/>
            <div class="st_row">
              <div class="st_column _rank">Rank</div>
              <div class="st_column _name">Name</div>
              <div class="st_column _surname">Surname</div>
              <div class="st_column _year">Year</div>
              <div class="st_column _section">Section</div>
            </div>
          </header>
          <div class="st_table">
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Vanessa</div>
              <div class="st_column _surname">Schneider</div>
              <div class="st_column _year">2004</div>
              <div class="st_column _section">Russia</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">laura</div>
              <div class="st_column _surname">Beike</div>
              <div class="st_column _year">1952</div>
              <div class="st_column _section">Sweden</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">John</div>
              <div class="st_column _surname">Doe</div>
              <div class="st_column _year">1973</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Max</div>
              <div class="st_column _surname">Luke</div>
              <div class="st_column _year">1971</div>
              <div class="st_column _section">USA</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Kunze</div>
              <div class="st_column _year">2015</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Janina</div>
              <div class="st_column _surname">Endres</div>
              <div class="st_column _year">1955</div>
              <div class="st_column _section">Belgium</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Lena</div>
              <div class="st_column _surname">Eifel</div>
              <div class="st_column _year">1996</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Nacht</div>
              <div class="st_column _year">1968</div>
              <div class="st_column _section">Swiss</div>
            </div>
          </div>
        </div>
        <div class="st_wrap_table" data-table_id="3">
          <header class="st_table_header">
            <h2>Native STICKY</h2>
            <Button positive inverted content="Добавить Новый Итап" icon="plus" id="addStepBtn"/>
            <div class="st_row">
              <div class="st_column _rank">Rank</div>
              <div class="st_column _name">Name</div>
              <div class="st_column _surname">Surname</div>
              <div class="st_column _year">Year</div>
              <div class="st_column _section">Section</div>
            </div>
          </header>
          <div class="st_table">
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">John</div>
              <div class="st_column _surname">Doe</div>
              <div class="st_column _year">1973</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Lena</div>
              <div class="st_column _surname">Eifel</div>
              <div class="st_column _year">1996</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Nacht</div>
              <div class="st_column _year">1968</div>
              <div class="st_column _section">Swiss</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Vanessa</div>
              <div class="st_column _surname">Schneider</div>
              <div class="st_column _year">2004</div>
              <div class="st_column _section">Russia</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">laura</div>
              <div class="st_column _surname">Beike</div>
              <div class="st_column _year">1952</div>
              <div class="st_column _section">Sweden</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Max</div>
              <div class="st_column _surname">Luke</div>
              <div class="st_column _year">1971</div>
              <div class="st_column _section">USA</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Kunze</div>
              <div class="st_column _year">2015</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Janina</div>
              <div class="st_column _surname">Endres</div>
              <div class="st_column _year">1955</div>
              <div class="st_column _section">Belgium</div>
            </div>
          </div>
        </div>
        <div class="st_wrap_table" data-table_id="4">
          <header class="st_table_header">
            <h2>CSS3 *~'</h2>
            <Button positive inverted content="Добавить Новый Итап" icon="plus" id="addStepBtn"/>
            <div class="st_row">
              <div class="st_column _rank">Rank</div>
              <div class="st_column _name">Name</div>
              <div class="st_column _surname">Surname</div>
              <div class="st_column _year">Year</div>
              <div class="st_column _section">Section</div>
            </div>
          </header>
          <div class="st_table">
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">John</div>
              <div class="st_column _surname">Doe</div>
              <div class="st_column _year">1973</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Max</div>
              <div class="st_column _surname">Luke</div>
              <div class="st_column _year">1971</div>
              <div class="st_column _section">USA</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Kunze</div>
              <div class="st_column _year">2015</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Jonas</div>
              <div class="st_column _surname">Nacht</div>
              <div class="st_column _year">1968</div>
              <div class="st_column _section">Swiss</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Vanessa</div>
              <div class="st_column _surname">Schneider</div>
              <div class="st_column _year">2004</div>
              <div class="st_column _section">Russia</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Janina</div>
              <div class="st_column _surname">Endres</div>
              <div class="st_column _year">1955</div>
              <div class="st_column _section">Belgium</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">Lena</div>
              <div class="st_column _surname">Eifel</div>
              <div class="st_column _year">1996</div>
              <div class="st_column _section">Germany</div>
            </div>
            <div class="st_row">
              <div class="st_column _rank">0</div>
              <div class="st_column _name">laura</div>
              <div class="st_column _surname">Beike</div>
              <div class="st_column _year">1952</div>
              <div class="st_column _section">Sweden</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserSteps;

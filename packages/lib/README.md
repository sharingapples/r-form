# R-Form

## Example Usage
### A simple form
```javascript
  const QUALIFICATIONS = ['school', 'hss', 'bachelors', 'masters', 'doctor'];
  const QUALIFICATIONS_DISPLAY = ['School', 'Higher Secondary', 'Bachelors', 'Masters', 'Doctor'];

  const Friends = (props) => (
    <Form.Dynamic>
      {(state, form) => {
        <div>
          <TextInput value={state.friends.length} onChange={e => {
            const n = parseInt(e.target.value);
            if (n !== state.friends.length) {
              const newFriends =  (n < state.friends.length)
                ? state.friends.slice(n)
                : state.friends.concat(new Array(n - state.friends.length).fill({
                  name: null,
                  gender: null,
                }));
              }
            }
            form.update({ friends: newFriends });
          }} />
          <Form.Select select={state => state[props.name]}>
            {friends, form => <label>Who are your friends <button onClick={() => form.update(friends.concat(null))} />
          </Form.Select>
          <Form.Array {...props}>
            {({ name }) => (
              <div>
                <TextInput name="name" />
                <DropDown name="gender" value="male" />
              </div>
            )}
          </Form.Array>
        </div>
      }}
    </Form.Dynamic>
  );

  const AlmaMater = (props) => (
    <Form.Array {...props}>
      {({ name, value, insert, remove }) => {
        const v = value[name];
        const id = v.id || uuid();
        return (
        <div onMouseEnter={this.showUtils} onMouseExit={this.hideUtils}>
          <Form.Group key={id} name={name}>
            <Form.Input name="id" value={id} />
            <TextInput name="institute" />
            <TextInput name="university" />
            <TextInput name="year" />
            <TextInput name="grade" />
            <button onClick={insert} />+</button>
            {value.length > 1 && <button onClick={remove} />-</button>}
          </Form.Group>
        </div>
        )
      }
    </Form.Array>
  );

  <Form>
    <TextInput name="firstName" validators={[required]} />
    <TextInput name="middleName" validators={} />
    <TextInput nmae="lastName" validators={[required]} />
    <DropDown
      name="maritalStatus"
      validators={[required]}
      options={{
        M: 'Married',
        U: 'Unmarried',
        D: 'Divorced',
        W: 'Widower',
      }}
    />
    <Form.Group name="spouse" visibility={form => form.maritalStatus === 'M'}>
      <TextInput name="firstName" validators={[required]} />
      <TextInput name="middleName" validators={} />
      <TextInput name="lastName" validators={[required]} />
    </Form.Group>
    <DropDown
      name="qualification"
      validators={[required]}
      options={QUALIFICATIONS.reduce((res, qual, idx) => {
        res[qual] = QUALIFICATIONS_DISPLAY[idx];
        return res;
      }, {})}
    />
    <Form.Dynamic>
      {(state) => {
        const idx = QUALIFICATIONS.indexOf(form.qualifation);
        const res = [];
        for (i = 0; i < idx; i += 1) {
          const q = QUALIFICATIONS[idx];
          res.push(<AlmaMater key={q} name={q} />);
        }
        return res;
      }}
    </Form.Dynamic>
  </Form>
```


import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import { provideExampleValue } from './higher-order'
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

function ReplaceMarkupOnPaste({ value, data, onChange, onAdd }) {
  return (
    <div>
      <h3>ReplaceMarkupOnPaste false</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={onChange}
        style={{
          ...defaultStyle,
          '& .flow': {
            backgroundColor: 'lightgreen',
          },
        }}
        placeholder={"Mention using '{{'"}
        a11ySuggestionsListLabel={'Suggested mentions'}
        replaceMarkupOnPaste={false}
      >
        <Mention
          data={data}
          onAdd={onAdd}
          style={defaultMentionStyle}
          className="flow"
          trigger="{{"
          markup="{{flow.__id__}}"
          allowSpaceInQuery
          displayTransform={id => `{{flow.${id}}}`}
        />
      </MentionsInput>
    </div>
  )
}

// const asExample = provideExampleValue("Olá {{flow.name}}, meu nome é {{flow.agent}}! Como posso ajudar? ")
const asExample = provideExampleValue('')

export default asExample(ReplaceMarkupOnPaste)

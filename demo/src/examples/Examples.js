import React from 'react'
import { StylesViaJss } from 'substyle-jss'

import Advanced from './Advanced'
import AsyncGithubUserMentions from './AsyncGithubUserMentions'
import CssModules from './CssModules'
import Emojis from './Emojis'
import CutCopyPaste from './CutCopyPaste'
import MultipleTrigger from './MultipleTrigger'
import Scrollable from './Scrollable'
import SingleLine from './SingleLine'
import SingleLineIgnoringAccents from './SingleLineIgnoringAccents'
import SuggestionPortal from './SuggestionPortal'
import BottomGuard from './BottomGuard'
import CustomSuggestionsContainer from './CustomSuggestionsContainer'
import ReplaceMarkupOnPaste from './ReplaceMarkupOnPaste'

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'pipilu',
    display: '皮皮鲁',
  },
  {
    id: 'luxixi',
    display: '鲁西西',
  },
  {
    id: 'satoshi1',
    display: '中本聪',
  },
  {
    id: 'satoshi2',
    display: 'サトシ・ナカモト',
  },
  {
    id: 'nobi',
    display: '野比のび太',
  },
  {
    id: 'sung',
    display: '성덕선',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
  {
    id: 'lydia',
    display: 'Lydìã Rôdarté-Qüayle',
  },
]

export default function Examples() {
  return (
    <StylesViaJss>
      <div>
        <ReplaceMarkupOnPaste data={flowVariables} />
        <MultipleTrigger data={users} />
        <SingleLine data={users} />
        <SingleLineIgnoringAccents data={users} />
        <Scrollable data={users} />
        <Advanced data={users} />
        <CutCopyPaste data={users} />
        <CutCopyPaste data={users} disabledSource />
        <CssModules data={users} />
        <AsyncGithubUserMentions data={users} />
        <Emojis data={users} />
        <SuggestionPortal data={users} />
        <BottomGuard data={users} />
        <CustomSuggestionsContainer data={users} />
      </div>
    </StylesViaJss>
  )
}

const flowVariables = [
  {
    id: 'name',
    display: 'flow.name',
  },
  {
    id: 'agent',
    display: 'flow.agent',
  },
  {
    id: 'address',
    display: 'flow.address',
  },
  {
    id: 'city',
    display: 'flow.city',
  },
  {
    id: 'state',
    display: 'flow.state',
  },
  {
    id: 'street',
    display: 'flow.street',
  },
  {
    id: 'number',
    display: 'flow.number',
  },
  {
    id: 'phone',
    display: 'flow.phone',
  },
  {
    id: 'operation',
    display: 'flow.operation',
  },
  {
    id: 'paymentMethod',
    display: 'flow.payment method',
  },
  {
    id: 'currency',
    display: 'flow.currency',
  },
  {
    id: 'interval',
    display: 'flow.interval',
  },
  {
    id: 'dueDate',
    display: 'flow.dueDate',
  },
  {
    id: 'billet',
    display: 'flow.billet',
  },
  {
    id: 'payment',
    display: 'flow.payment',
  },
  {
    id: 'cnpj',
    display: 'flow.cnpj',
  },
  ...Array.from(Array(2000)).map((_, i) => ({
    id: 'id' + i,
    display: 'flow.id' + i,
  })),
]

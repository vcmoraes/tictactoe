import React from 'react'
import { SafeAreaView, Alert } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setSelectedItem, cleanGame } from '../../actions/HomeActions'

const ContainerGame = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const ContainerTable = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const OptionGame = styled.View`
  flex-basis: 30%;
  height: 100px;
`
const Button = styled.Button`
  margin-top: 20px;
`
const SelectArea = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const TextOption = styled.Text``

class Home extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.homeData.winner) {
      Alert.alert(
        'Atenção',
        nextProps.homeData.winner,
        [
          {
            text: 'OK',
            onPress: () => this.props.cleanGame()
          }
        ],
        { cancelable: false }
      )
    }
    return true
  }
  render() {
    const {
      homeData: { valueCurrent },
      cleanGame
    } = this.props
    return (
      <ContainerGame>
        <ContainerTable>
          <RenderItem x={0} y={0} {...this.props} />
          <RenderItem x={0} y={1} {...this.props} />
          <RenderItem x={0} y={2} {...this.props} />

          <RenderItem x={1} y={0} {...this.props} />
          <RenderItem x={1} y={1} {...this.props} />
          <RenderItem x={1} y={2} {...this.props} />

          <RenderItem x={2} y={0} {...this.props} />
          <RenderItem x={2} y={1} {...this.props} />
          <RenderItem x={2} y={2} {...this.props} />
        </ContainerTable>
        <Button
          title="Recomeçar"
          onPress={() => cleanGame()}
          color={valueCurrent ? 'black' : 'transparent'}
        />
      </ContainerGame>
    )
  }
}

const RenderItem = ({ x, y, setSelectedItem, homeData: { matrix } }) => (
  <OptionGame backgroundColor={(x + y) % 2 == 0 ? '#C0C0C0' : '#DCDCDC'}>
    <SelectArea onPress={() => setSelectedItem && setSelectedItem(x, y)}>
      <TextOption>{matrix[x][y] || ''}</TextOption>
    </SelectArea>
  </OptionGame>
)

const mapStateToProps = state => {
  return {
    homeData: state.homeData
  }
}

const mapDispatchToProps = dispatch => ({
  setSelectedItem: (x, y) => dispatch(setSelectedItem(x, y)),
  cleanGame: () => dispatch(cleanGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

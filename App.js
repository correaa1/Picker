import {Picker} from '@react-native-community/picker';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Calabresa', valor: 20.9},
        {key: 2, nome: 'Mussarela', valor: 19.9},
        {key: 3, nome: 'Portuguesa', valor: 21.9},
        {key: 4, nome: 'Quatro Queijo', valor: 22.9},
        {key: 5, nome: 'Marguerita', valor: 22.9},
      ],
    };
  }
  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={v} label={v.nome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({pizza: itemValue})
          }>
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>
          Voce escolheu:{this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});

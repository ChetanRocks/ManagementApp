import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import constants from '../../config/constants';
import CityItem from '../../components/CityItem';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const { width, height } = Dimensions.get('window');

class HomeView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {

    }
  };

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        cities: nextProps.cities,
        error: nextProps.error,
        completed: nextProps.completed
      });
    }
  }

  getHotels = (city) => {
    this
      .props
      .navigation
      .navigate('Hotels', { city });
  };

  render() {
    return (
      <View style={{ backgroundColor: constants.PRIMARY_BG_COLOR, width, height: (height - 45) }}>
        {
          this.state.completed ?
            (
              this.state.error ? <Error /> :
                <ScrollView>
                  <CityItem city={{}} key={0} event={this.getHotels} />
                  {this.state
                    .cities
                    .map((city) => (
                      <CityItem city={city} key={city._id} event={this.getHotels} />
                    ))}
                </ScrollView>
            ) :
            <Loading />
        }
      </View>
    );
  }

  getHotels = (city) => {
    this
      .props
      .navigation
      .navigate('Hotels', { city });
  };
}

HomeView.propTypes = {
  getCities: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired
};

export default HomeView;
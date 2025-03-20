import type { Schema, Struct } from '@strapi/strapi';

export interface AccordionFaq extends Struct.ComponentSchema {
  collectionName: 'components_accordion_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'stack';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    searchPlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BotChatBotSetting extends Struct.ComponentSchema {
  collectionName: 'components_bot_chat_bot_settings';
  info: {
    displayName: 'ChatBotSetting';
    icon: 'feather';
  };
  attributes: {
    botName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    welcomeMessage: Schema.Attribute.Text;
  };
}

export interface ButtonCallBackButton extends Struct.ComponentSchema {
  collectionName: 'components_button_call_back_buttons';
  info: {
    description: '';
    displayName: 'CallBackButton';
    icon: 'bell';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    timeOpen: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ButtonLoginButton extends Struct.ComponentSchema {
  collectionName: 'components_button_login_buttons';
  info: {
    description: '';
    displayName: 'loginButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FormCustomerCbForm extends Struct.ComponentSchema {
  collectionName: 'components_form_customer_cb_forms';
  info: {
    displayName: 'CustomerCBForm';
  };
  attributes: {
    contactTimeLabel: Schema.Attribute.String;
    endpoint: Schema.Attribute.String;
    formSubTitle: Schema.Attribute.String;
    formTitle: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    observationsLabel: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
  };
}

export interface GridsArticleGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_article_grids';
  info: {
    description: '';
    displayName: 'ArticleGrid';
    icon: 'clock';
  };
  attributes: {
    articleCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    maxLength: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface GridsFourBlocksGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_four_blocks_grids';
  info: {
    description: '';
    displayName: 'FourBlocksGrid';
    icon: 'apps';
  };
  attributes: {
    blocks_items: Schema.Attribute.Component<'shared.hero-banner-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavNavBar extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_bars';
  info: {
    description: '';
    displayName: 'NavBar';
    icon: 'bulletList';
  };
  attributes: {
    menus: Schema.Attribute.Component<'nav.nav-bar-menu-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavNavBarMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_bar_menu_items';
  info: {
    description: '';
    displayName: 'NavBarMenuItem';
    icon: 'code';
  };
  attributes: {
    campaign: Schema.Attribute.Relation<'oneToOne', 'api::campaign.campaign'>;
    link: Schema.Attribute.Component<'nav.nav-link', false>;
    sections: Schema.Attribute.Component<'nav.nav-bar-section', true>;
  };
}

export interface NavNavBarSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_bar_sections';
  info: {
    description: '';
    displayName: 'NavBarSection';
    icon: 'calendar';
  };
  attributes: {
    items: Schema.Attribute.Component<'nav.nav-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_links';
  info: {
    description: '';
    displayName: 'NavLink';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    campaign: Schema.Attribute.Relation<'oneToOne', 'api::campaign.campaign'>;
    href: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    subSite: Schema.Attribute.Relation<'oneToOne', 'api::sub-site.sub-site'>;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    text: Schema.Attribute.String;
  };
}

export interface SharedAlertCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_alert_cards';
  info: {
    description: '';
    displayName: 'AlertCard';
    icon: 'bell';
  };
  attributes: {
    cta: Schema.Attribute.Component<'nav.nav-link', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    description: '';
    displayName: 'HeroBanner';
    icon: 'book';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.hero-banner-item', true>;
    showArrows: Schema.Attribute.Boolean;
    showSteps: Schema.Attribute.Boolean;
    timeDisplaying: Schema.Attribute.BigInteger;
  };
}

export interface SharedHeroBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banner_items';
  info: {
    description: '';
    displayName: 'HeroBannerItem';
    icon: 'apps';
  };
  attributes: {
    bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cta: Schema.Attribute.Component<'nav.nav-link', false>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMobileAppAdd extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobile_app_adds';
  info: {
    displayName: 'MobileAppAdd';
    icon: 'gift';
  };
  attributes: {
    appleStoreUrl: Schema.Attribute.String;
    appScreens: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    googlePlayUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTwoColumnBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_column_banners';
  info: {
    description: '';
    displayName: 'TwoColumnBanner';
    icon: 'folder';
  };
  attributes: {
    cta: Schema.Attribute.Component<'nav.nav-link', false>;
    description: Schema.Attribute.String;
    direction: Schema.Attribute.Enumeration<['left', 'right']>;
    externalYtbUrl: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    twoColumnBody: Schema.Attribute.Component<'shared.rich-text', false>;
  };
}

export interface SlidersServiceSliderItem extends Struct.ComponentSchema {
  collectionName: 'components_sliders_service_slider_items';
  info: {
    displayName: 'ServiceSliderItem';
    icon: 'archive';
  };
  attributes: {
    cta: Schema.Attribute.Component<'nav.nav-link', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SlidersServicesSlider extends Struct.ComponentSchema {
  collectionName: 'components_sliders_services_sliders';
  info: {
    description: '';
    displayName: 'ServicesSlider';
    icon: 'chartPie';
  };
  attributes: {
    services_items: Schema.Attribute.Component<
      'sliders.service-slider-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TextCampaignHighlight extends Struct.ComponentSchema {
  collectionName: 'components_text_campaign_highlights';
  info: {
    description: '';
    displayName: 'CampaignHighlight';
    icon: 'bulletList';
  };
  attributes: {
    highlight: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accordion.faq': AccordionFaq;
      'bot.chat-bot-setting': BotChatBotSetting;
      'button.call-back-button': ButtonCallBackButton;
      'button.login-button': ButtonLoginButton;
      'form.customer-cb-form': FormCustomerCbForm;
      'grids.article-grid': GridsArticleGrid;
      'grids.four-blocks-grid': GridsFourBlocksGrid;
      'nav.nav-bar': NavNavBar;
      'nav.nav-bar-menu-item': NavNavBarMenuItem;
      'nav.nav-bar-section': NavNavBarSection;
      'nav.nav-link': NavNavLink;
      'shared.alert-card': SharedAlertCard;
      'shared.hero-banner': SharedHeroBanner;
      'shared.hero-banner-item': SharedHeroBannerItem;
      'shared.media': SharedMedia;
      'shared.mobile-app-add': SharedMobileAppAdd;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.two-column-banner': SharedTwoColumnBanner;
      'sliders.service-slider-item': SlidersServiceSliderItem;
      'sliders.services-slider': SlidersServicesSlider;
      'text.campaign-highlight': TextCampaignHighlight;
    }
  }
}
